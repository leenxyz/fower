import { FowerPlugin } from '@fower/core'

const gapMap: Record<string, string> = {
  gap: 'gap',
  x: 'columnGap',
  y: 'rowGap',
}

function isMatch(key: string) {
  return /^gap[xy]?-?$|^gridTemplateColumns$/i.test(key)
}

function toStyle(key: string, value: any): any {
  const style: any = {}

  if (key.startsWith('gridTemplateColumns')) {
    style.gridTemplateColumns = `repeat(${value}, minmax(0px, 1fr))`
  }

  if (/^gap[xy]?-?$/i.test(key)) {
    const position = key.replace(/^gap/i, '') || 'gap'
    style[gapMap[position.toLocaleLowerCase()]] = value
  }

  return style
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.value)
      return atom
    },
  }
}
