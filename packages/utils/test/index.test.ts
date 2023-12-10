import {
  upFirst,
  downFirst,
  kebab,
  camel,
  isNumber,
  isEmptyObj,
  isPercentNumber,
  jsKeyToCssKey,
  objectToClassName,
  argsToProps,
} from '../src'

test('upFirst', () => {
  expect(upFirst('abc')).toEqual('Abc')
  expect(upFirst()).toEqual('')
})

test('downFirst', () => {
  expect(downFirst('Abc')).toEqual('abc')
  expect(downFirst()).toEqual('')
})

test('kebab', () => {
  expect(kebab('aBc')).toEqual('a-bc')
  expect(kebab('fooBar')).toEqual('foo-bar')
  expect(kebab('FooBar')).toEqual('foo-bar')
  expect(kebab('gap-1')).toEqual('space-x-1')
  expect(kebab('p0')).toEqual('p0')
})

test('camel', () => {
  expect(camel('FooBar')).toEqual('fooBar')
  expect(camel('foo-bar')).toEqual('fooBar')
  // expect(camel('foo_bar')).toEqual('fooBar')
  expect(camel('Foo Bar')).toEqual('fooBar')
})

test('isNumber', () => {
  expect(isNumber('123')).toEqual(true)
  expect(isNumber('12.3')).toEqual(true)
})

test('isEmptyObj', () => {
  expect(isEmptyObj({})).toEqual(true)
  expect(isEmptyObj(null)).toEqual(true)
})

test('isPercentNumber', () => {
  expect(isPercentNumber('10p')).toEqual(true)
})

test('jsKeyToCssKey', () => {
  expect(jsKeyToCssKey('WebkitLineClamp')).toEqual('-webkit-line-clamp')
  expect(jsKeyToCssKey('lineHeight')).toEqual('line-height')
})

describe('objectToClassName', () => {
  test('no prefix', () => {
    expect(objectToClassName({ foo: 'bar' })).toEqual('css-2196683918')
  })

  test('with prefix', () => {
    expect(objectToClassName({ foo: 'bar' }, 'foo-')).toEqual('foo-2196683918')
  })
})

describe('argsToProps', () => {
  test('no prefix', () => {
    const args = ['gray100', 'className', { green100: true }, ['red100']]
    const result = argsToProps(args)
    expect(result).toMatchObject({
      css: { green100: true },
      gray100: true,
      red100: true,
    })
  })
})
