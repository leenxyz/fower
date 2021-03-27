import { Props, Theme, CSSProperties } from '@styli/types'
import { Atom } from '@styli/atom'
import { styleSheet } from '@styli/sheet'
import { toRules } from '@styli/css-object-processor'
import { isEmptyObj, isPlainType, hash, cssObjToStr, objectToClassName } from '@styli/utils'
import { styli } from './styli'
import { runPreprocessors } from './atom-preprocessors'
import { classNameCache } from './cache'

/**
 * An Abstract tool to handle atomic props
 */
export class Parser {
  /**
   * atom parsed from props
   */
  atoms: Atom[] = []

  /**
   * unique className hash by component props
   */
  uniqueClassName: string = ''

  constructor(readonly props: Props = {}, readonly theme: Theme) {
    this.traverseProps(props)
  }

  /**
   * traverse Props to init atoms
   */
  private traverseProps(props: Props): void {
    if (isEmptyObj(props)) return

    const { excludedProps = [] } = props
    const { plugins = [] } = styli.config

    // traverse Props
    for (let [propKey, propValue] of Object.entries(props)) {
      // the prop should be excluded by user setting
      if (excludedProps.includes(propKey)) continue

      let initialAtom = new Atom({
        propKey,
        propValue,
        key: propKey,
      })

      let newAtom: Atom = runPreprocessors(initialAtom, this as any)

      // if handled, push to this.atoms and skip it
      if (newAtom?.handled) {
        this.atoms.push(newAtom)
        continue
      }

      for (const plugin of plugins) {
        if (!plugin.isMatch?.(newAtom.key)) continue

        if (plugin.beforeAtomStyleCreate) {
          newAtom = plugin.beforeAtomStyleCreate(newAtom, this as any)
        }

        if (plugin.onAtomStyleCreate) {
          newAtom = plugin.onAtomStyleCreate(newAtom, this as any)
        }

        newAtom = {
          ...this.createAtomClassNames(newAtom),
          matchedPlugin: plugin.name,
        }

        this.atoms.push(newAtom)
        break // break from this plugin
      }
    }
  }

  /**
   * generate className postfix if not boolean props
   * @example #fff -> fff;  50% -> 50p; 1.5 -> 15;
   */
  private getClassPostfix(value: any) {
    const valueStr = String(value)
    const str = valueStr.replace(/#/g, '').replace(/\%/g, 'p').replace(/\./g, 'd')
    const isValidClassName = /^[a-zA-Z0-9-]+$/.test(str)

    return isValidClassName ? str : hash(str)
  }

  /**
   * create ClassNames for Atom
   * 普通atomic props className 只有一个, 但 css props 的className有多个，所以使用数组
   * @param atom
   */
  createAtomClassNames(atom: Atom) {
    const { propKey = '', propValue, classNames, type } = atom
    const ignoreType = ['responsive', 'invalid']

    if (classNames?.length) return atom

    if (ignoreType.includes(type)) return atom

    /** global className prefix */
    const configPrefix = styli.getConfig('prefix')
    const prefix = configPrefix ? configPrefix + '-' : ''

    // if boolean type props, use prop key as className
    if (typeof propValue === 'boolean') {
      atom.classNames = [`${prefix}${propKey}`]
      return atom
    }

    const postfix = this.getClassPostfix(propValue)
    atom.classNames = [`${prefix}${propKey}-${postfix}`]

    return atom
  }

  getAtomCacheKey(propKey: string, propValue: any) {
    if (!isPlainType(propValue)) return ''
    return `${propKey}-${propValue}`
  }

  private setUniqueClassName() {
    if (!this.uniqueClassName) this.uniqueClassName = objectToClassName(this.props)
  }

  /**
   * get component classNames
   */
  getClassNames() {
    const atomClassNames = this.atoms
      .map((i) => {
        if (i.type === 'responsive') this.setUniqueClassName()
        return i.classNames?.join(' ')
      })
      .concat(this.uniqueClassName)
      .join(' ')
    return atomClassNames
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
   * get rules for parser.insertRule
   * @returns
   */
  toCssRules(): string[] {
    const responsiveCSS: any = {}

    const css = this.atoms.reduce<string[]>((result, atom) => {
      const { classNames, type, style = {} } = atom
      const [className] = classNames || []

      // no style in falsy prop
      if (type === 'invalid') return result

      // empty style
      if (isEmptyObj(style)) return result

      // if in classNameCache, no need to insert to stylesheet
      if (classNameCache.get(className)) return result

      if (className) classNameCache.set(className, true)

      if (type === 'prefix') {
        return [...result, ...toRules(style, className)]
      }

      if (type === 'style') {
        return [...result, `.${className} { ${cssObjToStr(style)} }`]
      }

      if (type === 'responsive') {
        for (const [breakpoint, responsiveStyle] of Object.entries(style)) {
          responsiveCSS[breakpoint] = cssObjToStr(responsiveStyle, responsiveCSS[breakpoint])
        }
      }

      return result
    }, [])

    if (!isEmptyObj(responsiveCSS)) {
      this.setUniqueClassName()
      return Object.entries(responsiveCSS)
        .reverse() // 因为 insertRule 有顺序
        .reduce<string[]>((r, cur) => {
          const [breakpoint, mediaCssStr] = cur
          let rule = `.${this.uniqueClassName}{${mediaCssStr}}`

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
      const styliProp = atoms.find((atom) => atom.propKey === propKey || atom.key == propKey)
      return styliProp ? result : { ...result, [propKey]: propValue }
    }, {} as Props)
  }

  insertRule() {
    const rules = this.toCssRules()
    styleSheet.insertStyles(rules)
  }
}
