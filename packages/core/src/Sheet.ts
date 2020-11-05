import { CSSProperties } from 'react'
import { Props, Atom, Theme } from './types'
import { styleManager } from './styleManager'
import { isBrowser, isEmptyObj, cssKeyToStyleKey, isPlainType, isEqual, hash } from '@styli/utils'
import { coreMiddleware } from './middleware'
import { styli } from './styli'
import { parseCSSProp } from './utils'

/**
 * Sheet, One Component map to one Sheet
 */
export class Sheet {
  /**
   * atom parsed from props
   */
  atoms: Atom[] = []

  className: string

  constructor(readonly props: Props, private theme: Theme) {
    const classNamePrefix = (styli.config.prefix || 'css') + '-'
    const className = classNamePrefix + hash('' + styli.componentKey++)
    this.className = className
    this.traverseProps(props)
  }

  /**
   * traverse Props to init atoms
   */
  private traverseProps(props: Props): void {
    if (isEmptyObj(props)) return

    const [middleware, plugins] = styli.getPlugins()
    const middlewareList = [coreMiddleware, ...middleware]

    for (let [propKey, propValue] of Object.entries(props)) {

      const propValueIsPlainType = isPlainType(propValue)
      const pluginCacheKey = `plugin-${propKey}-${propValueIsPlainType ? propValue : ''}`
      const pluginCacheValue = styli.cache[pluginCacheKey]


      if (!pluginCacheValue || !propValueIsPlainType) {
        // handle theme
        if (typeof propValue === 'function') {
          propValue = propValue(this.theme)
        }

        for (const plugin of plugins) {
          const initialAtom = { propKey, propValue, style: {}, type: 'style' } as Atom

          const newAtom = middlewareList.reduce(
            (finalAtom, middleware) => {
              return middleware.middleware!(plugin, finalAtom, this)
            },
            { ...initialAtom }, // if use initialAtom directly, isEqual(newAtom, initialAtom) always for true.
          )

          if (!isEqual(newAtom, initialAtom)) {
            this.addAtom(newAtom)
            styli.cache[pluginCacheKey] = newAtom
            break
          }
        }
      } else {
        this.addAtom(pluginCacheValue)
      }
    }
  }

  /**
   *  @example #fff -> fff;  50% -> 50p; 1.5 -> 15;
   * @param value
   * @param isArray
   */
  private getClassPostfix(value: any) {
    const valueStr = Array.isArray(value) ? value.join('-') : String(value)
    const str = valueStr.replace(/#/g, '').replace(/\%/g, 'p').replace(/\./g, 'd')
    const isValidClassName = /^[a-zA-Z0-9-]+$/.test(str)

    return isValidClassName ? str : hash(str)
  }

  private getClassName() {
    const unitClassName = this.getClassNames()
    const className = `${this.className} ${unitClassName}`
    if (!this.props.className) return className
    return `${this.props.className} ${className}`
  }

  private getPropsByInline(inline: boolean) {
    const { props, atoms } = this
    const parsedProps: Props = Object.keys(props).reduce((result: Props, cur: any) => {
      const prop = atoms.find(({ propKey }) => propKey === cur)
      return prop ? result : { ...result, [cur]: props[cur] }
    }, {} as Props)

    if (inline) {
      parsedProps.style = this.toStyles()
      return parsedProps
    }

    /**
     * insert css to <style></style>
     */
    styleManager.insertStyles(this.toCss())

    parsedProps.className = this.getClassName()

    return parsedProps
  }

  private isInline(): boolean {
    let inline: boolean

    if (typeof styli.config.inline === 'boolean') {
      inline = !!styli.config.inline
    } else {
      inline = isBrowser ? false : true
    }

    return inline
  }

  /**
   * add atom to sheet
   * @param atom
   */
  addAtom(atom: Atom) {
    const { propKey = '', propValue, className } = atom

    if (!className) {
      if (typeof propValue === 'boolean') {
        atom.className = propKey
      } else {
        const postfix = this.getClassPostfix(propValue)
        atom.className = `${propKey}-${postfix}`
      }
    }

    this.atoms.push(atom)
  }

  /**
   * get component classNames
   */
  getClassNames() {
    return this.atoms.map((i) => i.className).join(' ')
  }

  /**
   * get style object
   */
  toStyles() {
    const styliStyles = this.atoms.reduce((result, cur) => {
      if (cur.type !== 'style') return result
      return { ...result, ...cur.style }
    }, {} as CSSProperties)

    /** array style for RN */
    if (Array.isArray(this.props.style)) {
      return [styliStyles, ...this.props.style]
    }

    return { ...styliStyles, ...this.props.style }
  }

  /**
   * get class string
   */
  toCss(): string {
    let mediaCss: any = []
    const css = this.atoms.reduce((result, atom) => {
      const { className = '', type, style } = atom

      if (styli.cache[className] || isEmptyObj(style)) return result

      if (className) styli.cache[className] = true

      if (type === 'prefix') {
        return result + parseCSSProp(atom.style, className)
      }

      if (type === 'no-prefix') {
        return result + parseCSSProp(atom.style)
      }

      if (type === 'style') {
        /** to css atom string */
        const cssAtomStr = Object.keys(atom.style).reduce((r, k) => {
          const value: any = (atom as any).style[k]
          const cssKey = cssKeyToStyleKey(k)

          if (!Array.isArray(value)) return r + `${cssKey}: ${value};`

          value.forEach((v, idx) => {
            mediaCss[idx] = (mediaCss[idx] || []) + `${cssKey}: ${v};`
          })

          return r + `${cssKey}: ${value[0]};`
        }, '')
        // wrap with css className
        return result + `.${className} { ${cssAtomStr} }`
      }

      return result
    }, '')

    if (mediaCss.length) {
      const responsiveCss = styli
        .getTheme('breakpoints')
        ?.reduce((result: string, b: string, i: number) => {
          return result + `@media (min-width: ${b}) { .${this.className}{${mediaCss[i]}} }`
        }, '')
      return css + responsiveCss
    }

    return css
  }

  getParsedProps(): Props {
    const { props } = this
    if (isEmptyObj(props)) return {}
    const inline: boolean = this.isInline()
    return this.getPropsByInline(inline)
  }
}
