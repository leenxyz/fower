import { presetWeb } from '@fower/preset-web'
import { store } from '@fower/store'

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
