import { StyliPlugin } from '@styli/types'
import { kebab } from '@styli/utils'

export function isDisplayKey(key: string) {
  return /^(hidden|inline|inlineBlock|inlineFlex|block|grid|table)$|^display$/gi.test(key)
}

export function toStyle(key: string, value: any): any {
  if (key === 'hidden') return { display: 'none' }

  /** display */
  if (key === 'display') return { display: value }

  return { display: kebab(key) }
}

export default (): StyliPlugin => {
  return {
    isMatch: isDisplayKey,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.value)
      return atom
    },
  }
}
