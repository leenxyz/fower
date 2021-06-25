import { Atom } from '@fower/atom'

export const atomCache = new Map<string, Atom>()

export function getAtomIds() {
  return Array.from(atomCache.keys())
}

;(globalThis as any).__fower_atom_cache__ = atomCache
