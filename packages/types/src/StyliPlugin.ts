import { Atom } from './Atom'
import { Theme } from './Theme'
import { SheetType } from './SheetType'

export interface StyliPlugin {
  name: string
  isMatch?(key: string): boolean
  beforeAtomStyleCreate?(atom: Atom, sheet: SheetType): Atom
  onAtomStyleCreate?(atom: Atom, sheet: SheetType): Atom
  onStyleCreate?(sheet: SheetType): void
  middleware?(plugin: StyliPlugin, atom: Atom, sheet: SheetType, theme: Theme): Atom
}
