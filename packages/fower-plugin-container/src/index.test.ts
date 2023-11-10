import { fowerStore } from '@fower/core'
import plugin from '.'

const { isMatch, init } = plugin()

test('isMatch', () => {
  expect(isMatch!('container')).toEqual(true)
  expect(isMatch!('containerFOOO')).toEqual(false)
})

test('container', () => {
  expect(fowerStore.compositions.get('container')).toBeFalsy()
  init!({})
  init!({})
  expect(fowerStore.compositions.get('container')).toBeTruthy()
})
