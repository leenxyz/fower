import { CSSObject } from './CSSObject'
import { Theme } from './Theme'
export interface Atom {
  propKey: 'css' | 'debug' | 'reset' | ({} & string)
  propValue: string | number | boolean | CSSObject | ((theme: Theme) => any)
  style: CSSObject
  type?: 'style' | 'prefix' | 'no-prefix' | 'media-queries' | 'invalid'
  className?: string
}
