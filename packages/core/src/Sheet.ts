import { CSSProperties } from 'react'
import { Theme } from '@styli/theming'
import { Props, Atom } from './types'
import {
  isEmptyObj,
  cssKeyToStyleKey,
  isPlainType,
  isEqual,
  hash,
  parseCSSProp,
} from '@styli/utils'
import { coreMiddleware } from './middleware'
import { styli } from './styli'

/**
 * Sheet, One Component map to one Sheet
 */
export class Sheet {
  /**
   * atom parsed from props
   */
  private atoms: Atom[]
  private className: string

  constructor(readonly props: Props, private theme: Theme) {
    this.className = ''
    this.atoms = this.traverseProps(props)
  }

  private setUniteClassName() {
    this.className = 'styli-' + hash('' + styli.componentKey++)
  }

  /**
   * traverse Props to init atoms
   */
  private traverseProps(props: Props): Atom[] {
    if (isEmptyObj(props)) return []

    const [middleware, plugins] = styli.getPlugins()
    const middlewareList = [coreMiddleware, ...middleware]

    const atoms: Atom[] = []
    for (let [propKey, propValue] of Object.entries(props)) {
      const initialAtom = { propKey, propValue, type: 'style' } as Atom

      /**
       * propValue is false, just collect propKey and ignore it
       */
      if (propValue === false) {
        atoms.push(initialAtom)
        continue
      }

      const propValueIsPlainType = isPlainType(propValue)
      const pluginCacheKey = `plugin-${propKey}-${propValueIsPlainType ? propValue : ''}`
      const pluginCacheValue = styli.cache[pluginCacheKey]

      /**
       * if propValue is object, don't use cache
       */
      if (!pluginCacheValue || !propValueIsPlainType) {
        for (const plugin of plugins) {
          let atom = { ...initialAtom }

          // before
          if (plugin.beforeVisitProp) {
            atom = plugin.beforeVisitProp(atom, this)
          }

          // during
          atom = middlewareList.reduce((finalAtom, middleware) => {
            return middleware.middleware!(plugin, finalAtom, this, this.theme)
          }, atom)

          // after
          if (plugin.afterVisitProp) {
            atom = plugin.afterVisitProp(initialAtom, atom, this)
          }

          if (!isEqual(atom, initialAtom)) {
            const newAtom = this.atomModifier(atom)
            atoms.push(newAtom)
            styli.cache[pluginCacheKey] = newAtom
            break
          }
        }
      } else {
        atoms.push(pluginCacheValue)
      }
    }

    return atoms
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
   * atom modifier
   * @param atom
   */
  private atomModifier(atom: Atom) {
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
    return `${this.className} ${this.atoms.map((i) => i.className).join(' ')}`.trim()
  }

  /**
   * get style object
   */
  toStyles() {
    return this.atoms.reduce((result, cur) => {
      if (cur.type !== 'style') return result
      return { ...result, ...cur.style }
    }, {} as CSSProperties)
  }

  /**
   * get class string
   */
  toCss(): string {
    const mediaCss: any = {}
    const css = this.atoms.reduce((result, atom) => {
      const { className = '', type, style } = atom

      if (styli.cache[className] || isEmptyObj(style)) return result

      if (className) styli.cache[className] = true

      if (type === 'prefix') {
        return result + parseCSSProp(style, className)
      }

      if (type === 'no-prefix') {
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
    return Object.keys(props).reduce((result: Props, cur: any) => {
      const prop = atoms.find(({ propKey }) => propKey === cur)
      return prop ? result : { ...result, [cur]: props[cur] }
    }, {} as Props)
  }
}
