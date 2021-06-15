import { Atom } from '@fower/atom'

const serverCache: any = (globalThis as any).fower?.atomCache || []

export const atomCache = new Map<string, Atom>(serverCache.map((cache: any) => {
  const [key, value] = cache
  const temp: any = new Atom({ propKey: 'css', propValue: {} })

  for (const c in value) {
    temp[c] = value[c]
  }

  return [key, temp]
}))
