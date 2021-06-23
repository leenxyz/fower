import { Atom } from '@fower/atom'
import { atomCache } from '@fower/cache'
import { FowerPlugin } from '@fower/types'

const timingReg = /^ease(linear|In|Out|InOut)/i
const transitionReg = /^transition(None|All|Common|Colors|Opacity|Shadow|Transform)?$/i

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
  return timingReg.test(key) || transitionReg.test(key) || ['duration', 'delay'].includes(key)
}

export function toStyle(key: string, value: any): any {
  if (key === 'delay') return { transitionDelay: `${value}ms` }
  if (key === 'duration') return { transitionDuration: `${value}ms` }
  if (key === 'transition') return { transition: value }

  if (transitionReg.test(key)) {
    return { transitionProperty: transitionMaps[key.replace(/^transition/, '').toLowerCase()] }
  }

  if (timingReg.test(key)) {
    return { transitionTimingFunction: easeMaps[key.toLowerCase()] }
  }

  return { transition: value }
}

export default (): FowerPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      atom.style = toStyle(atom.key, atom.value)
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
        const durationId = 'duration-200'
        const durationAtom = atomCache.get(durationId)

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
        const timingAtom = atomCache.get(timingId)

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
