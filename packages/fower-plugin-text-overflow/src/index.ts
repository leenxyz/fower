import { FowerPlugin } from '@fower/types'

export default (): FowerPlugin => {
  return {
    isMatch(key) {
      const isTextOverflow = /^overflow(ellipsis|clip)$/i.test(key)
      return isTextOverflow || key === 'truncate'
    },
    handleAtom(atom) {
      const { key } = atom
      if (key === 'truncate') {
        atom.style = {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }
      } else {
        const value = key.replace(/^overflow/, '')
        atom.style = { textOverflow: value.toLowerCase() }
      }

      return atom
    },
  }
}
