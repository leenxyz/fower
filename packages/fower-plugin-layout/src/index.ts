import { FowerPlugin, Atom } from '@fower/core'
import { kebab } from '@fower/utils'
import { layoutKeys, toLayoutStyle } from './toLayoutStyle'

const layoutReg = new RegExp(`${layoutKeys.join('|')}`, 'i')

function isFlexDirection(key: string) {
  return /^flexDirection$/.test(key)
}

function isDirection(key: string) {
  return /^(row|column)(Reverse)?$/i.test(key)
}

function isLayout(key: string) {
  return layoutReg.test(key)
}

export function isMatch(key: string) {
  return isDirection(key) || isFlexDirection(key) || isLayout(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,

    /** For cache atom, we set id in beforeHandleAtom */
    beforeHandleAtom(atom) {
      /** @example <Box column></Box> */
      if (isDirection(atom.key)) {
        atom.id = `flexDirection-${atom.id}`

        atom.style = { flexDirection: kebab(atom.key) } as any
      }

      /** @example <Box flexDirection="row"></Box> */
      if (isFlexDirection(atom.key)) {
        atom.style = { flexDirection: kebab(atom.value) } as any
      }
      return atom
    },
    handleAtom(atom) {
      return atom
    },
    afterAtomStyleCreate(parser) {
      if (!parser.atoms.length) return

      const matched = parser.atoms.find((i) => isMatch(i.key))
      if (!matched) return

      const directionAtoms: Atom[] = []
      const layoutAtoms: Atom[] = []

      for (const atom of parser.atoms) {
        if (!isMatch(atom.key)) continue
        if (isLayout(atom.key)) {
          layoutAtoms.push(atom)
        } else {
          directionAtoms.push(atom)
        }
      }

      /**
       * set default flex-direction
       */
      if (!directionAtoms.length) {
        const directionRow = 'row'
        const rowKey = 'flexDirection-' + directionRow
        const rowAtom = parser.store.atomCache.get(rowKey)
        if (rowAtom) {
          parser.addAtom(rowAtom)
          directionAtoms.push(rowAtom)
        } else {
          const newRowAtom = new Atom({
            propKey: rowKey,
            propValue: true,
            key: directionRow,
            handled: true,
            style: { flexDirection: directionRow },
          })

          newRowAtom.setId()

          newRowAtom.id = `flexDirection-${newRowAtom.id}`
          parser.addAtom(newRowAtom)
          directionAtoms.push(newRowAtom)
        }
      }

      /** 每个 layout atom 要根据 breakpoint 生成 */
      for (const directionAtom of directionAtoms) {
        const { key, value } = directionAtom
        const { breakpoint } = directionAtom.meta
        const direction = isDirection(key) ? key : value

        for (const layoutAtom of layoutAtoms) {
          const newAtom = new Atom(layoutAtom)
          if (breakpoint) {
            newAtom.meta.breakpoint = layoutAtom.meta.breakpoint || breakpoint
          }

          newAtom.setId()
          newAtom.id = `${direction}-${newAtom.id}`

          const cachedAtom = parser.store.atomCache.get(newAtom.id)
          if (cachedAtom) {
            parser.addAtom(cachedAtom)
          } else {
            newAtom.style = toLayoutStyle(newAtom.key, direction)
            parser.addAtom(newAtom)
          }
        }
      }

      // if have display style, don't create flex atom
      const findDisplay = parser.atoms.find((i) => !!i?.style?.display && !i.meta?.pseudo)

      if (findDisplay) return

      const flexKey = 'flex'
      const flexAtom = parser.store.atomCache.get(flexKey)

      if (flexAtom) {
        parser.addAtom(flexAtom)
      } else {
        const atom = new Atom({
          propKey: flexKey,
          propValue: true,
          handled: true,
          style: { display: 'flex' },
        })

        parser.addAtom(atom)
      }
    },
  }
}
