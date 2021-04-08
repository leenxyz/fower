import { presetWeb } from '@styli/preset-web'
import { store } from '@styli/store'
import { injectGlobalStyle } from './injectGlobalStyle'

beforeAll(() => {
  store.configure(presetWeb)
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
