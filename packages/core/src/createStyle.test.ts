import { presetWeb } from '@styli/preset-web'
import { store } from '@styli/store'

import { createStyle } from '.'

beforeAll(() => {
  store.setConfig(presetWeb)
})

test('createStyle()', () => {
  const style = createStyle('p-1 m-100', {
    backgroundColor: 'red',
  })
  expect(style).toMatchObject({})
})
