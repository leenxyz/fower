import { Atom } from '@styli/types'

// cache control
export const classNameCache = new Map<string, boolean>()

export const atomCache = new Map<string, Atom>()

export const noMatchCache = new Map<string, boolean>()
