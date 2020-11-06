import CSS from 'csstype'
import { Theme } from './theme.types'

type CSSProperties = CSS.Properties<number | string>

type FnValue = (theme: Theme) => boolean | number | string | (boolean | number | string)[]
export type PropValue = FnValue | boolean | number | string | (boolean | number | string)[]

export type PseudosObject = { [P in CSS.Pseudos]?: CSSProperties }

export type CssObject<T = any> =
  | (CSSProperties & PseudosObject)
  | {
      [K in keyof T]?: T[K] extends object ? CssObject<T[K]> : CSSProperties
    }
