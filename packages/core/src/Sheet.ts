import { CSSProperties } from 'react'
import { Props, Atom, Theme } from '@styli/types'
import {
  isEmptyObj,
  cssKeyToStyleKey,
  isPlainType,
  isEqual,
  hash,
  parseCSSProp,
} from '@styli/utils'
import { corePlugin } from './middleware'
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

  private setUniteClassName() {
    this.className = 'styli-' + hash('' + styli.componentKey++)
  }

  /**
   * traverse Props to init atoms
   */

  private traverseProps(props: Props): void {
    if (isEmptyObj(props)) return

    const [middleware, plugins] = styli.getPlugins()
    const middlewareList = [corePlugin, ...middleware]

    // traverse Props
    for (let [propKey, propValue] of Object.entries(props)) {
      const initialAtom = { propKey, propValue, type: 'style', key: propKey, cache: true } as Atom

      const propValueIsPlainType = isPlainType(propValue)
      const pluginCacheKey = `plugin-${propKey}-${propValueIsPlainType ? propValue : ''}`
      const pluginCacheValue = styli.atomCache[pluginCacheKey]

      /**
       * if propValue is object, don't use cache
       */
      if (pluginCacheValue && propValueIsPlainType) {
        this.atoms.push(pluginCacheValue)
        continue
      }

      for (const plugin of plugins) {
        let atom = { ...initialAtom }

        // before
        if (plugin.beforeVisitProp) {
          atom = plugin.beforeVisitProp(atom, this as any)
        }

        // during
        atom = middlewareList.reduce((finalAtom, middleware) => {
          return middleware.middleware!(plugin, finalAtom, this as any, this.theme)
        }, atom)

        if (!isEqual(atom, initialAtom)) {
          const newAtom = {
            ...this.createAtomClassName(atom),
            matchedPlugin: plugin.name,
          }

          this.atoms.push(newAtom)

          if (newAtom.cache) {
            styli.atomCache[pluginCacheKey] = newAtom
          }
          break
        }
      }
    }

    /** run afterVisitProp */
    Object.keys(props).forEach((propKey) => {
      for (const plugin of plugins) {
        if (plugin.isMatch!(propKey) && plugin.afterVisitProp) {
          plugin.afterVisitProp!(this as any)
          // break
        }
      }
    })
  }

  /**
   *  @example #fff -> fff;  50% -> 50p; 1.5 -> 15;
   * @param value
   * @param isArray
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

    if (className || type === 'media-queries') return atom

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

  /**
   * get component classNames
   */
  getClassNames() {
    const atomClassNames = this.atoms
      .filter((i) => i.type !== 'invalid')
      .map((i) => i.className)
      .join(' ')
    return `${this.className} ${atomClassNames}`.trim()
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

      if (styli.classNameCache[className] || isEmptyObj(style)) return result

      if (className) styli.classNameCache[className] = true

      if (type === 'prefix') {
        return result + parseCSSProp(style, className)
      }

      /** global style */
      if (type === 'global') {
        return result + parseCSSProp(style)
      }

      if (type === 'style') {
        /** to css atom string */
        const cssAtomStr = Object.keys(style).reduce((r, k) => {
          const value: any = (atom as any).style[k]
          const cssKey = cssKeyToStyleKey(k)
          return r + `${cssKey}: ${value};`
        }, '')

        // wrap with css className
        return result + `.${className} { ${cssAtomStr} }`
      }

      if (type === 'media-queries') {
        for (const breakpoint in style) {
          const mediaStyle = (style as any)[breakpoint]
          for (const key in mediaStyle) {
            const cssKey = cssKeyToStyleKey(key)
            const cssValue = (mediaStyle as any)[key]
            mediaCss[breakpoint] = (mediaCss[breakpoint!] || '') + `${cssKey}: ${cssValue};`
          }
        }
      }

      return result
    }, '')

    if (!isEmptyObj(mediaCss)) {
      this.setUniteClassName()
      let cssStr = ''
      for (const breakpoint in mediaCss) {
        const unit = `@media (min-width: ${breakpoint}) { .${this.className}{${mediaCss[breakpoint]}} }`
        cssStr = cssStr + unit
      }
      return css + cssStr
    }

    return css
  }

  getParsedProps(): Props {
    const { props, atoms } = this
    if (!props) return {}
    return Object.keys(props).reduce((result: Props, cur: any) => {
      const find = atoms.find((atom) => atom.key === cur)
      return find ? result : { ...result, [cur]: props[cur] }
    }, {} as Props)
  }
}
