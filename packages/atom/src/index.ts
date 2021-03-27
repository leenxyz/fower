type AtomType = 'style' | 'prefix' | 'responsive' | 'invalid'

interface Options {
  propKey: 'css' | 'debug' | ({} & string)
  propValue: any
}

export class Atom {
  constructor(options: Partial<Options>) {
    this.key = options?.propKey ?? ''
    this.propKey = options?.propKey ?? ''
    this.propValue = options?.propValue
  }

  /**
   * propKey may changed by plugin, so use key record origin propKey
   */
  key: 'css' | 'debug' | ({} & string) = ''

  /**
   * original propKey, 原始的propkey
   * @example
   * <Box red200></Box> propKey is red200
   * <Box red200--hover></Box> propKey is red200--hover
   */
  propKey: 'css' | 'debug' | ({} & string) = ''

  propValue: any

  style: any

  type: AtomType = 'style'

  /**
   * className list of atom
   */
  classNames: string[] = []

  /**
   * plugin name matched for this atom
   */
  matchedPlugin: string = ''

  /**
   * if handled, this atom is ready to push to parser.atoms
   */
  handled: boolean = false

  /**
   * atom can be cached
   * TODO: 命名有歧义，需解释什么时候可以被 cached
   */
  cache?: boolean
}
