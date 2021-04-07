import { isUnitProp } from './is-unit-prop'

test('color is not unitProp', () => {
  expect(isUnitProp('color')).toBeFalsy()
})

test('padding is unitProp', () => {
  expect(isUnitProp('padding')).toBeTruthy()
})

test('font-size is unitProp', () => {
  expect(isUnitProp('font-size')).toBeTruthy()
})
