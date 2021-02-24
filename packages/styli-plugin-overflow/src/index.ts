import { StyliPlugin } from '@styli/types'

export const overFlowTypes = ['visible', 'hidden', 'scroll']

export function isOverFlowKey(key: string) {
  return /^overflow[XY]?$/.test(key)
}

export function overFlowPropToStyle(prop: string, propValue: any): any {
  return { [prop]: propValue }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-overflow',
    isMatch: isOverFlowKey,
    onAtomStyleCreate(atom) {
      atom.style = overFlowPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
