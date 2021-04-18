import { FowerPlugin } from '@fower/types'

interface EllipsisPlugin {
  defaultLineNum?: number
  defaultMaxWidth?: number
}

export default (config?: EllipsisPlugin): FowerPlugin => {
  const { defaultLineNum = 1, defaultMaxWidth = 100 } = config || {}
  return {
    isMatch(key) {
      return /^ellipsis(\d+)?(-.+)?$/.test(key)
    },
    handleAtom(atom) {
      const [, line, width] = atom.key.match(/^ellipsis(\d+)?-?(.+)?$/) || []

      const lineNum = Number(line || defaultLineNum)
      const maxWidth = atom.isValueProp ? atom.value : width || defaultMaxWidth

      if (lineNum === 1) {
        atom.style = {
          maxWidth,
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }
      } else {
        atom.style = {
          maxWidth,
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          WebkitLineClamp: Number(line),
        }
      }

      return atom
    },
  }
}
