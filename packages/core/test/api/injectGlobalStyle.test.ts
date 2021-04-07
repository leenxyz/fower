import { presetWeb } from '@styli/preset-web'
import { styli } from '../../src/styli'

import { injectGlobalStyle } from '../../src/api'

beforeAll(() => {
  styli.configure(presetWeb)
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
