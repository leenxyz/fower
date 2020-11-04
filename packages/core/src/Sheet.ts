import hash from 'string-hash'
import isBrowser from 'is-in-browser'
import { CSSProperties } from 'react'
import { Props, Atom, Middleware, Plugin } from './types'
import { styleManager } from './styleManager'
import { isEmptyObj, isFalsyProp, kebab } from '@styli/utils'
import { coreMiddleware } from './middleware'
import { styli } from './styli'
import { getValue } from './utils'

// TODO: @qj 源码快有 2000 行，equal 代价太够，需移除
import isEqual from 'lodash.isequal'

/**
 * Sheet, one Props map to one Sheet
 */
export class Sheet {
  /**
   * atom parsed from props
   */
  atoms: Atom[] = []

  className: string

  constructor(readonly props: Props) {
    const classNamePrefix = (styli.config.prefix || 'css') + '-'
    const className = classNamePrefix + hash('' + styli.componentKey++)
    this.className = className
    this.traverseProps()
  }

  /**
   * traverse Props to init atoms
   */
  private traverseProps(): void {
    const { props } = this
    if (isEmptyObj(props)) return

    const plugins = styli.getConfig<Plugin[]>('plugins')
    const middleware = styli.getConfig<Middleware[]>('middleware')
    const middlewareList = [coreMiddleware, ...middleware]

    for (const [propKey, propValue] of Object.entries(props)) {
      if (isFalsyProp(propValue)) continue

      for (const plugin of plugins) {
        const initialAtom = { propKey, propValue, style: {}, type: 'style' } as Atom

        const newAtom = middlewareList.reduce(
          (finalAtom, middleware) => {
            return middleware(plugin, finalAtom, this)
          },
          { ...initialAtom }, // if use initialAtom directly, isEqual(newAtom, initialAtom) always for true.
        )

        if (!isEqual(newAtom, initialAtom)) {
          this.addAtom(newAtom)
          break
        }
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

  /**
   * add atom to sheet
   * @param atom
   */
  addAtom(atom: Atom) {
    const { propKey = '', propValue } = atom

    if (typeof propValue === 'boolean') {
      atom.className = propKey
    } else {
      const postfix = this.getClassPostfix(propValue)
      atom.className = `${propKey}-${postfix}`
    }

    this.atoms.push(atom)
  }

  getAtom(propKey: string) {
    return this.atoms.find((i) => i.propKey === propKey)
  }

  removeAtom(propKey: string) {
    const idx = this.atoms.findIndex((i) => i.propKey === propKey)
    if (idx !== -1) {
      this.atoms.splice(idx, 1)
    }
  }

  updateAtom(propKey: string, atom: Atom) {
    const idx = this.atoms.findIndex((i) => i.propKey === propKey)
    if (idx !== -1) {
      this.atoms[idx] = atom
    } else {
      this.atoms.push(atom)
    }
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
      const { className = '' } = atom

      if (styli.cache[className] || isEmptyObj(atom.style)) return result

      switch (atom.type) {
        case 'prefix':
          return result + parseCSSProp(atom.style, className).join(' ')
        case 'no-prefix':
          return result + parseCSSProp(atom.style).join(' ')
      }

      /** to css atom string */
      const cssAtomStr = Object.keys(atom.style).reduce((r, k) => {
        const value: any = (atom as any).style[k]
        const cssKey = kebab(k)

        if (!Array.isArray(value)) return r + `${cssKey}: ${value};`

        value.forEach((v, idx) => {
          mediaCss[idx] = (mediaCss[idx] || []) + `${cssKey}: ${v};`
        })

        return r + `${cssKey}: ${value[0]};`
      }, '')

      // wrap with css className
      return result + `.${className} { ${cssAtomStr} }`
    }, '')

    if (mediaCss.length) {
      const responsiveCss = styli
        .getTheme('breakpoints')
        .reduce((result: string, b: string, i: number) => {
          return result + `@media (min-width: ${b}) { .${this.className}{${mediaCss[i]}} }`
        }, '')
      return css + responsiveCss
    }

    return css
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

  getParsedProps(): Props {
    const { props } = this
    if (isEmptyObj(props)) return {}
    const inline: boolean = this.isInline()
    return this.getPropsByInline(inline)
  }
}

function getPaths(object: any): any {
  return (
    object &&
    typeof object === 'object' &&
    Object.keys(object).reduce(
      (p, k) => (getPaths(object[k]) || [[]]).reduce((r: any, a: any) => [...r, [k, ...a]], p),
      [],
    )
  )
}

/**
 * parse css props
 * // TODO: 太乱，需要重构
 * @param cssObj
 * @param className
 */
function parseCSSProp(cssObj: any, className = '') {
  const getPrefix = (v: string) => (/^::?.*/.test(v) ? '' : ' ')

  const paths = getPaths(cssObj)

  const cssPropFragmentList: string[] = paths
    .reduce((result: any, path: string[]) => {
      const attrValue = path.reduce((obj: any, c: string) => obj[c], cssObj)

      const attr = kebab('' + path.pop())

      // pseudo-class pseudo-element connect selector string directly
      const str = path.reduce((result, value) => `${result}${getPrefix(value)}${value}`, '')

      const obj = {
        key: `${className ? '.' + className : ''}${getPrefix(str)}${str}`,
        value: { [attr]: getValue(attrValue) },
      }

      // merge same class
      const idx = result.findIndex((a: any) => a.key === obj.key)
      if (idx === -1) {
        result = result.concat(obj)
      } else {
        const { key, value } = result[idx]
        result[idx] = { key, value: { ...obj.value, ...value } }
      }
      return result
    }, [])
    .map(({ key, value }: any) => {
      let str = ''
      for (let i in value) {
        str = `${str}${[i]}: ${value[i]};`
      }
      return `${key}{${str}}`
    })
  return cssPropFragmentList
}
