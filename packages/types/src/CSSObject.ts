import CSS from 'csstype'

type CSSProperties = CSS.Properties<number | string>

export type PseudosObject = { [P in CSS.Pseudos]?: CSSProperties }

export type CSSObject<T = any> =
  | (CSSProperties & PseudosObject)
  | {
      [K in keyof T]?: T[K] extends object ? CSSObject<T[K]> : CSSProperties
    }
