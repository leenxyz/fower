import { Atom } from '@fower/atom'

export const ssrAtomIds: string[] = (globalThis as any)?.SSR_ATOM_IDS || []

export const atomCache = new Map<string, Atom>()

export function getAtomIds() {
  return Array.from(atomCache.keys())
}
