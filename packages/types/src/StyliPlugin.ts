import { Atom } from './Atom'
import { Theme } from './Theme'
import { SheetType } from './SheetType'

export interface StyliPlugin {
  name: string
  isMatch?(key: string): boolean
  beforeVisitProp?(atom: Atom, sheet: SheetType): Atom
  onVisitProp?(atom: Atom, sheet: SheetType): Atom
  afterVisitProp?(sheet: SheetType): void
  middleware?(plugin: StyliPlugin, atom: Atom, sheet: SheetType, theme: Theme): Atom
}
