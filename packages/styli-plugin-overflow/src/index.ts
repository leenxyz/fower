import { StyliPlugin } from '@styli/types'

export function isOverFlowKey(key: string) {
  return /^overflow[XY]?$/i.test(key)
}

export function overFlowPropToStyle(key: string, propValue: any): any {
  if (key === 'overflow') return { [key]: propValue }
  const styleKey = key.replace(/[a-z]$/, (last) => last.toUpperCase())
  return { [styleKey]: propValue }
}

export default (): StyliPlugin => {
  return {
    isMatch: isOverFlowKey,
    handleAtom(atom) {
      atom.style = overFlowPropToStyle(atom.key, atom.propValue)
      return atom
    },
  }
}
