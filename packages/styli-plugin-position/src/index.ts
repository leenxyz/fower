import { StyliPlugin } from '@styli/types'

export const positionKeys = ['static', 'fixed', 'absolute', 'relative', 'sticky']

export function isMatch(key: string) {
  return (
    /^(top|right|bottom|left)(-.+)?$/i.test(key) || positionKeys.includes(key) || key === 'position'
  )
}

export function toStyle(prop: string, value: any): any {
  if (prop === 'position') return { position: value }

  /** @example absolute, relative  */
  if (positionKeys.includes(prop)) return { position: prop }

  return { [prop]: value }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.value)
      return atom
    },
  }
}
