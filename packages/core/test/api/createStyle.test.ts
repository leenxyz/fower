import { presetWeb } from '@styli/preset-web'
import { styli } from '../../src/styli'

import { createStyle } from '../../src/api'

beforeAll(() => {
  styli.configure(presetWeb)
})

test('createStyle()', () => {
  const style = createStyle('p-1 m-100', {
    backgroundColor: 'red',
  })
  expect(style).toMatchObject({})
})
