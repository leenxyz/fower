import plugin from '.'

const { isMatch } = plugin()

test('isMatch', () => {
  expect(isMatch!('ellipsis')).toEqual(true)
  expect(isMatch!('ellipsis1')).toEqual(true)
  expect(isMatch!('ellipsis-100')).toEqual(true)
  expect(isMatch!('ellipsis2-200')).toEqual(true)
})
