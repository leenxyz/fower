import { StyliPlugin } from '@styli/types'
import { kebab } from '@styli/utils'

export function isDisplayKey(key: string) {
  return /^(hidden|inline|inlineBlock|inlineFlex|displayFlex|block|grid|table)$|^display$/gi.test(
    key,
  )
}

export function displayPropToStyle(prop: string, propValue: any): any {
  if (prop === 'hidden') return { display: 'none' }

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
