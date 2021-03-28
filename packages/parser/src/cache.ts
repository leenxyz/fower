import { Atom } from '@styli/atom'

// cache control
export const classNameCache = new Map<string, boolean>()

export const atomCache = new Map<string, Atom>()

export const ruleCache = new Map<string, boolean>()
