// import { presetWeb } from '@fower/preset-web'
// import { store } from '../src/store'
import { styleSheet } from '../src/sheet'

test('getSsrAtomIds()', () => {
  const ids = styleSheet.getSsrAtomIds()
  expect(ids.length).toBe(0)
})

test('getStyle()', () => {
  expect(styleSheet.getStyle()).toBe('')
})
