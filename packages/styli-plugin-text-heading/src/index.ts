import { getValue, styli } from '@styli/core'
import { StyliPlugin } from '@styli/types'

export function isTextHeadingKey(key: string) {
  return /^heading[1-6]$/.test(key)
}

export function textHeadingPropToStyle(prop: string): any {
  const index = Number(prop.replace(/^heading/, '')) - 1
  const headings = styli.getTheme<any[]>('headings')
  return {
    display: 'block',
    fontWeight: 'bold',
    fontSize: getValue(headings[index]) || getValue(14),
  }
}

export default (): StyliPlugin => {
  return {
    name: 'styli-plugin-text-heading',
    isMatch: isTextHeadingKey,
    onAtomStyleCreate(atom) {
      atom.style = textHeadingPropToStyle(atom.propKey)
      return atom
    },
  }
}
