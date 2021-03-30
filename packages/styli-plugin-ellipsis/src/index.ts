import { StyliPlugin } from '@styli/types'
import { isValueProp } from '@styli/utils'

interface EllipsisPlugin {
  defaultLineNum?: number
  defaultMaxWidth?: number
}

export default (config?: EllipsisPlugin): StyliPlugin => {
  const { defaultLineNum = 1, defaultMaxWidth = 100 } = config || {}
  return {
    name: 'styli-plugin-ellipsis',
    isMatch(key) {
      return /^ellipsis(\d+)?(-.+)?$/.test(key)
    },
    onAtomStyleCreate(atom) {
      const [, line, width] = atom.propKey.match(/^ellipsis(\d+)?-?(.+)?$/) || []

      const lineNum = Number(line || defaultLineNum)
      const maxWidth = isValueProp(atom.propValue) ? atom.propValue : width || defaultMaxWidth

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
