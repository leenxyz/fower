import { presetWeb } from '@fower/preset-web'
import { store } from '@fower/core'
import { css } from '../src/css'

afterEach(() => {
  store.setConfig(presetWeb)
})

test('css()', () => {
  const name = css('p-1', 'm-100')
  expect(typeof name).toBe('string')
})
