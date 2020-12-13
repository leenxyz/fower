import { CSSProperties } from 'react'
import { Props, Atom, Theme } from '@styli/types'
import { isEmptyObj, isPlainType, isEqual, hash, parseCSSProp, cssObjToStr } from '@styli/utils'
import { corePlugin } from './corePlugin'
import { styli } from './styli'

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

    // traverse Props
    for (let [propKey, propValue] of Object.entries(props)) {
      const initialAtom = { propKey, propValue, type: 'style', key: propKey, cache: true } as Atom

      const pluginCacheKey = this.getAtomCacheKey(propKey, propValue)
      const pluginCacheValue = styli.atomCache.get(pluginCacheKey)

      /**
       * if propValue is object, don't use cache
       */
      if (pluginCacheValue && pluginCacheKey) {
        this.atoms.push(pluginCacheValue)
        continue
      }

      for (const plugin of atomStyleCreations) {
        let atom = { ...initialAtom }

        if (plugin.beforeAtomStyleCreate) {
          atom = plugin.beforeAtomStyleCreate(atom, this as any)
        }

        atom = [corePlugin, ...atomModifiers].reduce((finalAtom, plugin) => {
          return plugin.onAtomModify!(plugin, finalAtom, this as any, this.theme)
        }, atom)

        if (!isEqual(atom, initialAtom)) {
          const newAtom = {
            ...this.createAtomClassName(atom),
            matchedPlugin: plugin.name,
          }

          this.atoms.push(newAtom)

          if (newAtom.cache) {
            styli.atomCache.set(pluginCacheKey, newAtom)
          }
          break
        }
      }
    }

    styleCreations.forEach((plugin) => plugin.onStyleCreate!(this as any))
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
      return atom
    }

    const postfix = this.getClassPostfix(propValue)
    atom.className = `${prefix}${propKey}-${postfix}`

    return atom
  }

  private getAtomCacheKey(propKey: string, propValue: any) {
    if (!isPlainType(propValue)) return ''
    return `plugin-${propKey}-${propValue}`
  }

  private setUniteClassName() {
    this.className = 'styli-' + hash('' + styli.componentKey++)
  }

  /**
   * get component classNames
   */
  getClassNames() {
    const atomClassNames = this.atoms
      .map((i) => i.className)
      .join(' ')
      .trim()
    return `${this.className} ${atomClassNames}`
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
   * get class string
   */
  toCss(): string {
    const mediaCss: any = {}

    const css = this.atoms.reduce((result, atom) => {
      const { className = '', type, style = {} } = atom

      // no style in falsy prop
      if (type === 'invalid') return result

      if (styli.classNameCache.get(className) || isEmptyObj(style)) return result

      if (className) styli.classNameCache.set(className, true)

      if (type === 'prefix') {
        return result + parseCSSProp(style, className)
      }

      /** global style */
      if (type === 'global') {
        return result + parseCSSProp(style)
      }

      if (type === 'style') {
        return result + `.${className} { ${cssObjToStr(style)} }`
      }

      if (type === 'media-queries') {
        for (const [breakpoint, mediaStyle] of Object.entries(style)) {
          mediaCss[breakpoint] = cssObjToStr(mediaStyle, mediaCss[breakpoint])
        }
      }

      return result
    }, '')

    if (!isEmptyObj(mediaCss)) {
      this.setUniteClassName()
      return Object.entries(mediaCss).reduce(
        (str, [breakpoint, mediaCssStr]) =>
          str + `@media (min-width: ${breakpoint}) { .${this.className}{${mediaCssStr}} }`,
        css,
      )
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
}
