import { FowerPlugin } from '@fower/types'
import { keyframes } from '@fower/core'

const timingReg = /^ease(linear|In|Out|InOut)/i

export function isMatch(key: string) {
  return (
    /^animate(None|Spin|ping|pulse|bounce)/i.test(key) ||
    timingReg.test(key) ||
    ['duration', 'delay'].includes(key)
  )
}

function toStyle(key: string): any {
  if (/^animateNone$/i.test(key)) {
    return { animation: 'none' }
  }

  if (/^animateSpin$/i.test(key)) {
    return {
      animation: 'spin 1s linear infinite',
    }
  }

  if (/^animatePing$/i.test(key)) {
    return {
      animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    }
  }

  if (/^animatePulse$/i.test(key)) {
    return {
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    }
  }

  if (/^animateBounce$/i.test(key)) {
    return {
      animation: 'bounce 1s infinite',
    }
  }

  // animation-duration: 1s;
  // animation-timing-function: linear;
  // animation-delay: 0s;
  // animation-iteration-count: infinite;
  // animation-direction: normal;
  // animation-fill-mode: none;
  // animation-play-state: running;
  // animation-name: spin;
}

export default (): FowerPlugin => {
  let inited = false
  return {
    isMatch,
    init() {
      if (inited) return
      inited = true
      keyframes(
        {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin',
      )

      keyframes(
        {
          '75%, 100%': { transform: 'scale(2)', opacity: 0 },
        },
        'ping',
      )

      keyframes(
        {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: '0.5' },
        },
        'pulse',
      )

      keyframes(
        {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'bounce',
      )
    },

    handleAtom(atom) {
      console.log('atom.key', atom.key)
      atom.style = toStyle(atom.key)
      return atom
    },
    afterAtomStyleCreate(parser) {
      if (!parser.atoms.length) return
    },
  }
}
