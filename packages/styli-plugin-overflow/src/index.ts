import { StyliPlugin } from '@styli/types'

export function isOverFlowKey(key: string) {
  return /^overflow[XY]?$/i.test(key)
}

export function overFlowPropToStyle(prop: string, propValue: any): any {
  if (prop === 'overflow') return { [prop]: propValue }
  const key = prop.replace(/[a-z]$/, (last) => last.toUpperCase())
  return { [key]: propValue }
}

export default (): StyliPlugin => {
  return {
    isMatch: isOverFlowKey,
    handleAtom(atom) {
      atom.style = overFlowPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
