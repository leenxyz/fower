import { presetWeb } from '@fower/preset-web'
import { store } from '@fower/store'

import { createStyle } from '.'

beforeAll(() => {
  store.setConfig(presetWeb)
})

test('createStyle()', () => {
  const style = createStyle('p-1', 'm-100')
  expect(style.padding).toEqual('1px')
  expect(style.margin).toEqual('100px')
})
