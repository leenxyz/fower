import { Atom, Parser, store } from '@fower/core'
import { FowerPlugin } from '@fower/core'

const timingReg = /^ease(linear|In|Out|InOut)/i
const transitionReg = /^transition(None|All|Common|Colors|Opacity|Shadow|Transform)?$/i
const commonKeys = ['duration', 'delay']

const transitionMaps: any = {
  none: 'none',
  all: 'all',
  common:
    'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
  colors: 'background-color, border-color, color, fill, stroke',
  opacity: 'opacity',
  shadow: 'box-shadow',
  transform: 'transform',
}

const easeMaps: any = {
  easelinear: 'linear',
  easein: 'cubic-bezier(0.4, 0, 1, 1)',
  easeout: 'cubic-bezier(0, 0, 0.2, 1)',
  easeinout: 'cubic-bezier(0.4, 0, 0.2, 1)',
}

export function isMatch(key: string) {
  return timingReg.test(key) || transitionReg.test(key) || commonKeys.includes(key)
}

export function toStyle(atom: Atom, parser: Parser): any {
  const { key, value } = atom
  const some = Object.keys(parser.props).some((i) => transitionReg.test(i))
  const prefix = some ? 'transition' : 'animation'

  if (key === 'delay') return { [`${prefix}Delay`]: `${value}ms !important` }
  if (key === 'duration') return { [`${prefix}Duration`]: `${value}ms !important` }
  if (key === 'transition') return { transition: value }

  if (transitionReg.test(key)) {
    return { transitionProperty: transitionMaps[key.replace(/^transition/, '').toLowerCase()] }
  }

  if (timingReg.test(key)) {
    return { [`${prefix}TimingFunction`]: easeMaps[key.toLowerCase()] }
  }
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom, parser) {
      atom.style = toStyle(atom, parser)
      return atom
    },
    afterAtomStyleCreate(parser) {
      if (!parser.atoms.length) return

      const matched = parser.atoms.find((i) => isMatch(i.key))
      if (!matched) return

      const hasTransition = parser.atoms.find((i) => transitionReg.test(i.key))

      if (!hasTransition) return

      /** set default Duration */
      const hasDuration = parser.atoms.find((i) => i.key === 'duration')

      if (!hasDuration) {
        const durationId = 'transition-duration-200'
        const durationAtom = store.atomCache.get(durationId)

        if (durationAtom) {
          parser.addAtom(durationAtom)
        } else {
          const atom = new Atom({
            propKey: durationId,
            propValue: true,
            handled: true,
            style: { transitionDuration: `${200}ms` },
          })
          parser.addAtom(atom)
        }
      }

      /** set default timing  */
      const hasTiming = parser.atoms.find((i) => timingReg.test(i.key))
      if (!hasTiming) {
        const timingId = 'easeInOut'
        const timingAtom = store.atomCache.get(timingId)

        if (timingAtom) {
          parser.addAtom(timingAtom)
        } else {
          const atom = new Atom({
            propKey: timingId,
            propValue: true,
            handled: true,
            style: { transitionTimingFunction: easeMaps[timingId.toLowerCase()] },
          })
          parser.addAtom(atom)
        }
      }
    },
  }
}
