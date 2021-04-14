import { presetWeb } from '@styli/preset-web'
import { store } from '@styli/store'
import { css } from './css'

afterEach(() => {
  store.setConfig(presetWeb)
})

test('css()', () => {
  const name = css('p-1 m-100')
  expect(typeof name).toBe('string')
})
