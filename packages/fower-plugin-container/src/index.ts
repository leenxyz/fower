import { FowerPlugin } from '@fower/types'
import { store } from '@fower/store'

export function isMatch(key: string) {
  return /^container$/i.test(key)
}

export default (): FowerPlugin => {
  return {
    isMatch,
    init() {
      store.composeAtom('container', {
        'w-100p': true,
        'maxW-640px--sm': true,
        'maxW-768px--md': true,
        'maxW-1024px--lg': true,
        'maxW-1280px--xl': true,
      })
    },
  }
}
