import { FowerPlugin, store } from '@fower/core'

export function isMatch(key: string) {
  return /^container$/i.test(key)
}

export default (): FowerPlugin => {
  let inited = false
  return {
    isMatch,
    init() {
      if (inited) return
      store.composeAtom('container', {
        'w-100p': true,
        'maxW-640px--sm': true,
        'maxW-768px--md': true,
        'maxW-1024px--lg': true,
        'maxW-1280px--xl': true,
      })
      inited = true
    },
  }
}
