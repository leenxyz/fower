import { getValue, Plugin, styli } from '@styli/core'

export function isTextHeadingKey(key: string) {
  return /^heading[1-6]$/.test(key)
}

export function textHeadingPropToStyle(prop: string): any {
  const index = Number(prop.replace(/^heading/, '')) - 1
  console.log('index:', index)
  const headings = styli.getTheme<any[]>('headings')
  return {
    display: 'block',
    fontWeight: 'bold',
    fontSize: getValue(headings[index]) || getValue(14),
  }
}

export default (): Plugin => {
  return {
    name: 'styli-plugin-text-heading',
    isMatch: isTextHeadingKey,
    onVisitProp(atom) {
      atom.style = textHeadingPropToStyle(atom.propKey)
      return atom
    },
  }
}
