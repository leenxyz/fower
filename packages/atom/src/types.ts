export interface Meta {
  /**
   * color mode
   * @exmple
   * mode: 'dark'
   */
  mode?: string

  /**
   * @exmple
   * breakpoint: '640px'
   */
  breakpoint?: string

  /**
   * @exmple
   * --hover -> hover
   * --befor -> befor
   */
  pseudo?: string

  /**
   * @exmple
   * --hover -> :
   * --befor -> ::
   */
  pseudoPrefix?: string

  /**
   * child selector for atom.className
   * @exmple
   * childSelector: '.child'
   */
  childSelector?: string

  /**
   * parent class for group pseudo
   * @exmple
   * parentClass: 'group'
   */
  parentClass?: string

  /**
   * is !important style
   */
  important?: boolean

  /**
   * is global style, value is global selector
   */
  global?: string

  /**
   * color name or value
   * @example
   * gray200--O20 -> gray200
   * gray200--T20 -> gray200
   * #666--D40 -> #666
   * #999--L40 -> #999
   */
  color?: string

  /**
   * color postfix for opacify,transparent,darken,lighten
   * @example
   * gray200--O20 -> O20
   * gray200--T20 -> T20
   * #666--D40 -> D40
   * #999--L40 -> L40
   */
  colorPostfix?: string
}
export interface Options {
  propKey: 'css' | 'debug' | ({} & string)
  propValue?: any

  key?: string
  value?: any

  meta?: Meta

  style?: any

  handled?: boolean
}
