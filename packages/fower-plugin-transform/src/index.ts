import { Atom } from '@fower/atom'
import { atomCache } from '@fower/cache'
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
      if (!parser.atoms.length) return

      const matched = parser.atoms.find((i) => isMatch(i.key))
      if (!matched) return

      // group atoms by pseudo
      const atomsMap: Record<string, Atom[]> = {}

      for (const atom of parser.atoms) {
        if (!isMatch(atom.key)) continue

        const { pseudo } = atom.meta

        if (pseudo) {
          atomsMap[pseudo] = [...(atomsMap[pseudo] || []), atom]
        } else {
          atomsMap.common = [...(atomsMap.common || []), atom]
        }
      }

      for (const key in atomsMap) {
        handle(atomsMap[key])
      }

      function handle(atoms: Atom[]) {
        const ids: string[] = []
        let values: string[] = []
        let meta: any = {}

        for (const atom of atoms) {
          const { value, key } = atom

          meta = { ...meta, ...atom.meta }

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
          meta,
          style: { transform: sortedValues.join(' ') },
        })
        parser.addAtom(atom)
      }
    },
  }
}
