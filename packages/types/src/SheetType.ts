import { CSSProperties } from 'react'
import { Theme } from './Theme'
import { Props } from './Props'
import { Atom } from './Atom'

export interface SheetType {
  props: Props
  theme: Theme
  /**
   * atom parsed from props
   */
  atoms: Atom[]
  className: string
  setUniteClassName(): void
  traverseProps(): void
  getClassPostfix(): string

  atomModifier(atom: Atom): Atom
  getClassNames(): string
  toStyles(): CSSProperties
  toCss(): string
  getParsedProps(): Props
}
