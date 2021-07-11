import { presetWeb } from '@fower/preset-web'
import { store } from '@fower/core'
import { injectGlobalStyle } from '../src/injectGlobalStyle'

beforeAll(() => {
  store.setConfig(presetWeb)
})

test('injectGlobalStyle()', () => {
  injectGlobalStyle({
    '*': {
      boxSizing: 'border-box',
    },
  })
  // TODO:
  expect(1).toEqual(1)
})
