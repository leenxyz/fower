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
   * pseudo: ':hover'
   */
  pseudo?: string

  /**
   * child selector for atom.className
   * @exmple
   * childSelector: '.child'
   */
  childSelector?: string

  /**
   * is !important style
   */
  important?: boolean

  /**
   * color postfix for opacify,transparent,darken,lighten
   * @example
   * gray200--O20 -> O20
   * gray200--T20 -> T20
   * #666--D40 -> D40
   * #999--L40 -> L40
   */
  colorPostfix?: string

  /**
   * color name or value
   * @example
   * gray200--O20 -> gray200
   * gray200--T20 -> gray200
   * #666--D40 -> #666
   * #999--L40 -> #999
   */
  color?: string
}
export interface Options {
  propKey: 'css' | 'debug' | ({} & string)
  propValue?: any

  key?: string
  value?: string | number | boolean

  meta?: Meta

  style?: any
  className?: string
  handled?: boolean
}
