import { presetWeb } from '@fower/preset-web'
import { store } from '../src/store'
import { createStyle } from '../src'

beforeAll(() => {
  store.setConfig(presetWeb)
})

test('createStyle()', () => {
  const style = createStyle('p-1', 'm-100')
  expect(style.padding).toEqual('1px')
  expect(style.margin).toEqual('100px')
})
