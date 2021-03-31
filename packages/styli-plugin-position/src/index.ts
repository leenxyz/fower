import { StyliPlugin } from '@styli/types'

export const positionKeys = ['static', 'fixed', 'absolute', 'relative', 'sticky']

export function isMatch(key: string) {
  return (
    /^(top|right|bottom|left)(-.+)?$/i.test(key) || positionKeys.includes(key) || key === 'position'
  )
}

export function positionPropToStyle(prop: string, propValue: any): any {
  if (prop === 'position') return { position: propValue }

  /** @example absolute, relative  */
  if (positionKeys.includes(prop)) return { position: prop }

  return { [prop]: propValue }
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = positionPropToStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
