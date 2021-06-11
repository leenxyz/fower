import { Atom } from '@fower/atom'

const serverCache = (globalThis as any).fower.atomCache

export const atomCache = serverCache ? new Map<string, Atom>(serverCache) : new Map<string, Atom>()
