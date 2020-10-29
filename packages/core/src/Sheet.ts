import hash from 'string-hash'
import { CSSProperties } from 'react'
import { Props, Atom } from './types'
import { kebab } from '@styli/utils'

/**
 * Sheet, one Props map to one Sheet
 */
export class Sheet {
  private breakpoints = [640, 768, 1024, 1280]

  private mediaStyles: string[] = ['', '', '', '', '', '']

  /**
   * component Props
   */
  props = {} as Props

  cssPropClassName: string = ''

  /**
   * atom parsed from props
   */
  atoms: Atom[] = []

  constructor(props: Props) {
    this.props = props
  }

  private storeMedieStyles(atom: Atom, cssKey: string, value: any[]) {
    value.forEach((_, i) => {
      // store responsive styles
      this.mediaStyles[i] += `.${atom.className} { ${cssKey}: ${value[i + 1]}; }`
    })
  }

  /**
   * add atom to sheet
   * @param atom
   */
  addAtom(atom: Atom) {
    const { propKey = '' } = atom
    const value = this.props[propKey]
    if (atom.propKey === 'css') {
      atom.className = `css-${hash(JSON.stringify(value))}`

      // store className from css Props
      this.cssPropClassName = atom.className
    } else if (typeof value === 'boolean') {
      atom.className = propKey
    } else if (Array.isArray(value)) {
      atom.className = `${propKey}-${value.join('-')}`
    } else {
      atom.className = `${propKey}-${hash(JSON.stringify(value))}`
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
      if (cur.propKey !== 'css') return { ...result, ...cur.style }
      return result
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
    // TODO: 循环可能太多
    const css = this.atoms.reduce((result, atom) => {
      // handle css prop
      if (atom.propKey === 'css') return result + parseCSSProp(atom.style, atom.className)

      /** to css atom string */
      const cssAtomStr = Object.keys(atom.style).reduce((r, k) => {
        const value: any = (atom as any).style[k]
        const cssKey = kebab(k)

        if (!Array.isArray(value)) return r + `${cssKey}: ${value};`

        //responsive style, TODO: 这里有不纯
        this.storeMedieStyles(atom, cssKey, value)

        return r + `${cssKey}: ${value[0]};`
      }, '')

      // wrap with css className
      return result + `.${atom.className} { ${cssAtomStr} }`
    }, '')

    const responsiveCss = this.breakpoints.reduce((result, b, i) => {
      return result + `@media (min-width: ${b}px) { ${this.mediaStyles[i]} }`
    }, '')

    return css + responsiveCss
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
        key: `.${className}${getPrefix(str)}${str}`,
        value: { [attr]: attrValue },
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
