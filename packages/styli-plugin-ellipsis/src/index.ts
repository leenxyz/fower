import { getValue, Plugin } from '@styli/core'
import { isValidPropValue } from '@styli/utils'

interface EllipsisPlugin {
  defaultLineNum?: number
  defaultMaxWidth?: number
}

export default (config?: EllipsisPlugin): Plugin => {
  const { defaultLineNum = 1, defaultMaxWidth = 100 } = config || {}
  return {
    name: 'styli-plugin-ellipsis',
    isMatch(key) {
      return /^ellipsis(\d+)?-?(.+)?$/.test(key)
    },
    onVisitProp(atom) {
      const [, line, width] = atom.propKey.match(/^ellipsis(\d+)?-?(.+)?$/) || []

      const lineNum = Number(line || defaultLineNum)
      const maxWidth = isValidPropValue(atom.propValue) ? atom.propValue : width || defaultMaxWidth

      if (lineNum === 1) {
        atom.style = {
          maxWidth: getValue('' + maxWidth),
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }
      } else {
        atom.style = {
          maxWidth: getValue('' + maxWidth),
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
