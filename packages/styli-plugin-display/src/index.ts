import { StyliPlugin } from '@styli/types'
import { kebab } from '@styli/utils'

export function isDisplayKey(key: string) {
  return /^(hide|inline|inline[Bb]lock|block|grid|table)$|^display$/.test(key)
}

export function displayPropToStyle(prop: string, propValue: any): any {
  if (prop === 'hide') return { display: 'none' }

  /** display */
  if (prop === 'display') return { display: propValue }

  return { display: kebab(prop) }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-display',
    isMatch: isDisplayKey,
    onAtomStyleCreate(atom) {
      atom.style = displayPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}
