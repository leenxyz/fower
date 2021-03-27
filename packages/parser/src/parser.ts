import { Atom } from '@styli/atom'
import { styleSheet } from '@styli/sheet'
import { parse } from '@styli/css-object-processor'
import { isEmptyObj, cssObjToStr, isPlainType, hash, objectToClassName } from '@styli/utils'
import { toRules } from '@styli/css-object-processor'
import { runPreprocessors } from './atom-preprocessors'

/**
 * An Abstract tool to handle atomic props
 */
export class Parser {
  /**
   * atom parsed from props
   */
  atoms: Atom[] = []

  constructor(readonly props: any = {}, readonly theme: any, readonly styli: any) {
    this.traverseProps(props)
  }

  /**
   * traverse Props to init atoms
   */
  private traverseProps(props: any): void {
    if (isEmptyObj(props)) return

    const { excludedProps = [] } = props
    const { plugins = [] } = this.styli.config

    // traverse Props
    for (let [propKey, propValue] of Object.entries(props)) {
      // the prop should be excluded by user setting
      if (excludedProps.includes(propKey)) continue

      // parse css prop
      if (propKey === 'css') {
        this.parseCSSProp(propValue)
        continue
      }

      let initialAtom = new Atom({
        propKey,
        propValue,
        key: propKey,
      })

      let newAtom: Atom = runPreprocessors(initialAtom, this as any, this.styli)

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

        newAtom.className = this.getAtomClassName(newAtom)
        newAtom.matchedPlugin = plugin.name
        newAtom.handled = true

        this.atoms.push(newAtom)
        break // break from this plugin
      }
    }
  }

  /**
   *  parse CSS prop
   * @param propValue 
   * @example 
   * ```jsx
      <Box
        css={{
          backgroundColor: 'bisque',
          padding: '20px',
          ':hover': {
            backgroundColor: 'yellow',
          },
          '.child': {
            color: 'white',
          },
        }}
      >
        SubTitle
        <Box className="child">Child</Box>
      </Box>
   * ```
   */
  private parseCSSProp(propValue: any) {
    const parsed = parse(propValue)
    const prefixClassName = objectToClassName(propValue)

    const atoms = parsed.reduce<Atom[]>((r, { selector, selectorType, style }) => {
      const isNested = selectorType !== 'void'
      const atom = new Atom({ propKey: 'css' })
      atom.style = isNested ? { [selector]: style } : style
      atom.type = selectorType === 'void' ? 'style' : 'prefix'
      atom.className = isNested ? prefixClassName : objectToClassName(style)

      return [...r, atom]
    }, [])

    console.log('css atoms:', atoms)

    this.atoms = [...this.atoms, ...atoms]
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
   * create ClassName for Atom
   * @param atom
   */
  private getAtomClassName(atom: Atom) {
    const { propKey = '', propValue, className } = atom

    if (className) return className

    /** global className prefix */
    const configPrefix = this.styli.getConfig('prefix')
    const prefix = configPrefix ? configPrefix + '-' : ''

    // if boolean type props, use prop key as className
    if (typeof propValue === 'boolean') `${prefix}${propKey}`

    const postfix = this.getClassPostfix(propValue)
    return `${prefix}${propKey}-${postfix}`
  }

  getAtomCacheKey(propKey: string, propValue: any) {
    if (!isPlainType(propValue)) return ''
    return `${propKey}-${propValue}`
  }

  /**
   * get component classNames
   */
  getClassNames(): string[] {
    return this.atoms.map((i) => i.className)
  }

  /**
   * get style object
   */
  toStyles() {
    return this.atoms.reduce((result, atom) => {
      if (atom.type !== 'style') return result // not style type
      return { ...result, ...atom.style }
    }, {} as any)
  }

  /**
   * get rules for parser.insertRule
   * @returns
   */
  toCssRules(): string[] {
    console.log('this.atoms', this.atoms)
    const rules = this.atoms.reduce<string[]>((result, atom) => {
      return [...result, ...this.getAtomRules(atom)]
    }, [])

    return rules
  }

  getParsedProps(): any {
    const { props, atoms } = this
    if (isEmptyObj(props)) return {}

    return Object.entries(props).reduce((result: any, [propKey, propValue]) => {
      const styliProp = atoms.find((atom) => atom.propKey === propKey || atom.key == propKey)
      return styliProp ? result : { ...result, [propKey]: propValue }
    }, {} as any)
  }

  insertRule() {
    const rules = this.toCssRules()
    styleSheet.insertStyles(rules)
  }

  getAtomRules(atom: Atom): string[] {
    let rules: string[] = []
    const { className, type, style = {} } = atom
    const responsiveCSS: any = {}

    // no style in falsy prop
    if (type === 'invalid') rules = []

    // empty style
    if (isEmptyObj(style)) rules = []

    // if in classNameCache, no need to insert to stylesheet
    // if (classNameCache.get(className)) return result
    // if (className) classNameCache.set(className, true)

    if (type === 'prefix') {
      rules = toRules(style, className)
    }

    if (type === 'style') {
      rules = [`.${className} { ${cssObjToStr(style)} }`]
    }

    if (type === 'responsive') {
      for (const [breakpoint, responsiveStyle] of Object.entries(style)) {
        responsiveCSS[breakpoint] = cssObjToStr(responsiveStyle, responsiveCSS[breakpoint])
      }

      const prefixClassName = objectToClassName(atom.propValue)

      const responsiveRules = Object.entries(responsiveCSS)
        .reverse() // 因为 insertRule 有顺序
        .reduce<string[]>((r, cur) => {
          const [breakpoint, cssStr] = cur
          let rule = `.${prefixClassName}{${cssStr}}`

          // this is responsive endpoint style
          if (breakpoint !== 'base')
            // TODO: important ?
            // rule = `@media (min-width: ${breakpoint}) {${rule}}`
            rule = `@media (min-width: ${breakpoint}) {${rule.replace(';', ' !important')}}`

          return [...r, rule]
        }, [])
      rules = responsiveRules
    }

    return rules
  }
}
