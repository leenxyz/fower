import { Atom } from './Atom'
import { Theme } from './Theme'
import { SheetType } from './SheetType'

export interface StyliPlugin {
  name: string
  isMatch?(key: string): boolean
  beforeAtomStyleCreate?(atom: Atom, sheet: SheetType): Atom
  onAtomStyleCreate?(atom: Atom, sheet: SheetType): Atom
  onStyleCreate?(sheet: SheetType): void
  onAtomModify?(plugin: StyliPlugin, atoms: Atom, sheet: SheetType, theme: Theme): Atom
}

export interface PluginCategory {
  atomModifiers: StyliPlugin[]
  atomStyleCreations: StyliPlugin[]
  styleCreations: StyliPlugin[]
}
