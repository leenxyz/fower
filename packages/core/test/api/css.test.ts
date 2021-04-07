import { presetWeb } from '@styli/preset-web'
import { styli } from '../../src/styli'

import { css } from '../../src/api'

afterEach(() => {
  styli.configure(presetWeb)
})

test('css()', () => {
  const name = css('p-1 m-100')
  expect(typeof name).toBe('string')
})
