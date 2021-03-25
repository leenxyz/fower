import { Props, Atom, Theme, CSSProperties } from '@styli/types'
import { toRules } from '@styli/css-object-processor'
import { isEmptyObj, isPlainType, isEqual, hash, cssObjToStr, trimStr } from '@styli/utils'
import { corePlugin } from './plugin'
import { styli } from './styli'
import { styleManager } from './styleManager'

/**
 * Sheet, One Component map to one Sheet
 */
export class Sheet {
  /**
   * atom parsed from props
   */
  atoms: Atom[] = []
  className: string = ''

  constructor(readonly props: Props = {}, private theme: Theme) {
    this.traverseProps(props)
  }

  /**
   * traverse Props to init atoms
   */
  private traverseProps(props: Props): void {
    if (isEmptyObj(props)) return

    const { atomModifiers, atomStyleCreations, styleCreations } = styli.plugins
    const { styliIgnore = [] } = props

    // traverse Props
    for (let [propKey, propValue] of Object.entries(props)) {
      if (styli.noMatchCache.get(propKey)) continue
      if (styliIgnore.includes(propKey)) continue

      const proxyAtom = this.getAtomInstance(propKey, propValue)

      const pluginCacheKey = this.getAtomCacheKey(propKey, propValue)
      const pluginCacheValue = styli.atomCache.get(pluginCacheKey)

      /**
       * if propValue is object, don't use cache
       */
      if (pluginCacheValue && pluginCacheKey) {
        this.atoms.push(pluginCacheValue)
        continue
      }

      let matched = false
      for (const plugin of atomStyleCreations) {
        let atom = proxyAtom.atom

        if (plugin.beforeAtomStyleCreate) {
          atom = plugin.beforeAtomStyleCreate(atom, this as any)
        }

        atom = [corePlugin, ...atomModifiers].reduce((finalAtom, atomModifier) => {
          return atomModifier.onAtomModify!(plugin, finalAtom, this as any, this.theme)
        }, atom)

        if (proxyAtom.changed || !isEqual(atom, proxyAtom.atom)) {
          // merge className and matched
          const newAtom = Object.assign(this.createAtomClassName(atom), {
            matchedPlugin: plugin.name,
          })

          // set atom cache
          newAtom.cache && styli.atomCache.set(pluginCacheKey, newAtom)
          matched = true
          this.atoms.push(newAtom)
          break
        }
      }
      !matched && styli.noMatchCache.set(propKey, true)
    }

    styleCreations.forEach((plugin) => plugin.onStyleCreate!(this as any))
  }

  /**
   * watch atom change
   */
  getAtomInstance(propKey: string, propValue: any) {
    const instance = {
      changed: false,
      atom: new Proxy(
        {
          propKey,
          propValue,
          type: 'style',
          key: propKey,
          cache: true,
        },
        {
          set(target: any, key: any, val: any) {
            target[key] = val
            instance.changed = true
            return true
          },
        },
      ),
    }

    return instance
  }

  /**
   * generate className postfix
   * @example #fff -> fff;  50% -> 50p; 1.5 -> 15;
   */
  private getClassPostfix(value: any) {
    const valueStr = String(value)
    const str = valueStr.replace(/#/g, '').replace(/\%/g, 'p').replace(/\./g, 'd')
    const isValidClassName = /^[a-zA-Z0-9-]+$/.test(str)

    return isValidClassName ? str : hash(str)
  }

  /**
   * create ClassName for Atom
   * @param atom
   */
  private createAtomClassName(atom: Atom) {
    const { propKey = '', propValue, className, type } = atom

    const ignoreType = ['media-queries', 'invalid', 'global']
    if (className || ignoreType.includes(type)) return atom

    const configPrefix = styli.getConfig('prefix')
    const prefix = configPrefix ? configPrefix + '-' : ''

    if (typeof propValue === 'boolean') {
      atom.className = `${prefix}${propKey}`
      atom.classNames = [`${prefix}${propKey}`]
      return atom
    }

    const postfix = this.getClassPostfix(propValue)
    atom.className = `${prefix}${propKey}-${postfix}`
    atom.classNames = [`${prefix}${propKey}-${postfix}`]

    return atom
  }

  private getAtomCacheKey(propKey: string, propValue: any) {
    if (!isPlainType(propValue)) return ''
    return `${propKey}-${propValue}`
  }

  private setUniteClassName() {
    if (!this.className) {
      this.className = 'styli-' + hash('' + styli.componentKey++)
    }
  }

  /**
   * get component classNames
   */
  getClassNames() {
    const atomClassNames = this.atoms
      .map((i) => {
        if (i.type === 'media-queries') {
          this.setUniteClassName()
        }
        return i.className
      })
      .join(' ')
    return trimStr(`${this.className} ${atomClassNames}`)
  }

  /**
   * get style object
   */
  toStyles() {
    return this.atoms.reduce((result, atom) => {
      if (atom.type !== 'style') return result // not style type
      return { ...result, ...atom.style }
    }, {} as CSSProperties)
  }

  /**
   * get rules for sheet.insertRule
   * @returns
   */
  toCssRules(): string[] {
    const mediaCss: any = {}

    const css = this.atoms.reduce<string[]>((result, atom) => {
      const { className = '', type, style = {} } = atom

      // no style in falsy prop
      if (type === 'invalid') return result

      if (styli.classNameCache.get(className) || isEmptyObj(style)) return result

      if (className) styli.classNameCache.set(className, true)

      if (type === 'prefix') {
        return [...result, ...toRules(style, atom?.classNames?.[0])]
      }
      if (type === 'global') {
        return [...result, ...toRules(style)]
      }

      if (type === 'style') {
        return [...result, `.${className} { ${cssObjToStr(style)} }`]
      }

      if (type === 'media-queries') {
        for (const [breakpoint, mediaStyle] of Object.entries(style)) {
          mediaCss[breakpoint] = cssObjToStr(mediaStyle, mediaCss[breakpoint])
        }
      }

      return result
    }, [])

    if (!isEmptyObj(mediaCss)) {
      this.setUniteClassName()
      return Object.entries(mediaCss)
        .reverse() // 因为 insertRule 有顺序
        .reduce<string[]>((r, cur) => {
          const [breakpoint, mediaCssStr] = cur
          let rule = `.${this.className}{${mediaCssStr}}`

          /** this is responsive endpoint style */
          if (breakpoint !== 'base') {
            rule = `@media (min-width: ${breakpoint}) {${rule}}`
          }
          return [...r, rule]
        }, css)
    }

    return css
  }

  getParsedProps(): Props {
    const { props, atoms } = this
    if (isEmptyObj(props)) return {}

    return Object.entries(props).reduce((result: Props, [propKey, propValue]) => {
      const styliProp = atoms.find((atom) => atom.key === propKey)
      return styliProp ? result : { ...result, [propKey]: propValue }
    }, {} as Props)
  }

  insertRule() {
    const rules = this.toCssRules()
    styleManager.insertStyles(rules)
  }
}
