import { Atom } from '@fower/atom'
import { atomCache } from '@fower/parser'
import { FowerPlugin } from '@fower/types'
import { isNumber } from '@fower/utils'

function isMatch(key: string) {
  return /^(scale[xy]?|rotate[xy]?|translate[xy]|skew[xy]?|origin)-?.*/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      return atom
    },

    afterAtomStyleCreate(parser) {
      let values: string[] = []
      const ids: string[] = []
      for (const atom of parser.atoms) {
        if (!isMatch(atom.key)) continue
        const { value, key } = atom

        if (/translate[xy]?/i.test(key)) {
          const v = isNumber(value) ? value + parser.config.unit : value
          const xy = key.replace(/translate/, '')
          values.push(`translate${xy.toUpperCase()}(${v})`)
        }

        if (/scale[xy]?/i.test(key)) {
          const v = isNumber(value) ? Number(value) / 100 : value
          const xy = key.replace(/scale/, '')
          values.push(`scale${xy.toUpperCase()}(${v})`)
        }

        if (/rotate[xy]?/i.test(key)) {
          values.push(`rotate(${value}deg)`)
        }

        if (/skew[xy]?/i.test(key)) {
          const xy = key.replace(/skew/, '')
          values.push(`skew${xy.toUpperCase()}(${value}deg)`)
        }

        ids.push(atom.id)
      }
      console.log('values', values)

      if (!values.length) return
      const sortedValues = values.sort()
      const propValue = ids.sort().join('-')
      const id = 'transform-' + propValue
      const transformAtom = atomCache.get(id)

      if (transformAtom) {
        return parser.addAtom(transformAtom)
      }

      const atom = new Atom({
        propKey: 'transform',
        propValue,
        handled: true,
        style: { transform: sortedValues.join(' ') },
      })
      atom.createClassName(parser.config.prefix)
      parser.addAtom(atom)
    },
  }
}
