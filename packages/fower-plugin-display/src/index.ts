import { FowerPlugin } from '@fower/core'
import { kebab } from '@fower/utils'

export function isDisplayKey(key: string) {
  const reg = /^(hidden|inline|inlineBlock|inlineGrid|inlineFlex|block|grid|table)$|^display$/gi
  return reg.test(key)
}

export function toStyle(key: string, value: any): any {
  if (key === 'hidden') return { display: 'none' }

  /** display */
  if (key === 'display') return { display: value }

  return { display: kebab(key.replace('inline', 'inline-')) }
}

export default (): FowerPlugin => {
  return {
    isMatch: isDisplayKey,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.value)
      return atom
    },
  }
}
