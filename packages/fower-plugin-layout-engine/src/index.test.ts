import { Parser } from '@fower/parser'
import { Atom } from '@fower/atom'
import plugin, { getFlexDirection } from '.'

const { isMatch, handleAtom } = plugin()

test('isMatch', () => {
  expect(isMatch!('toCenter')).toEqual(true)
  expect(isMatch!('toCenterX')).toEqual(true)
  expect(isMatch!('toCenterY')).toEqual(true)
  expect(isMatch!('toBottom')).toEqual(true)
  expect(isMatch!('toTop')).toEqual(true)
  expect(isMatch!('toLeft')).toEqual(true)
  expect(isMatch!('toRight')).toEqual(true)
  expect(isMatch!('toEvenly')).toEqual(true)
  expect(isMatch!('toAround')).toEqual(true)
  expect(isMatch!('toBetween')).toEqual(true)
})

test('getFlexDirection', () => {
  expect(getFlexDirection({ flexDirection: 'row-reverse' })).toBe('row-reverse')
  expect(getFlexDirection({ row: true })).toBe('row')
  expect(getFlexDirection({ column: true })).toBe('column')
  expect(getFlexDirection({})).toBe('row')
})

describe('row', () => {
  const parser = new Parser({ row: true })
  test('toCenter', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toCenter',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.justifyContent).toEqual('center')
    expect(atom.style.alignItems).toEqual('center')
  })

  test('toCenterX', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toCenterX',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.justifyContent).toEqual('center')
  })

  test('toCenterY', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toCenterY',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.alignItems).toEqual('center')
  })

  test('toTop', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toTop',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.alignItems).toEqual('flex-start')
  })

  test('toRight', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toRight',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.justifyContent).toEqual('flex-end')
  })

  test('toBottom', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toBottom',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.alignItems).toEqual('flex-end')
  })

  test('toLeft', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toLeft',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.justifyContent).toEqual('flex-start')
  })

  test('toBetween', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toBetween',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.justifyContent).toEqual('space-between')
  })

  test('toAround', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toAround',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.justifyContent).toEqual('space-around')
  })

  test('toEvenly', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toEvenly',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.justifyContent).toEqual('space-evenly')
  })
})

describe('column', () => {
  const parser = new Parser({ column: true })
  test('toCenter', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toCenter',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.justifyContent).toEqual('center')
    expect(atom.style.alignItems).toEqual('center')
  })

  test('toCenterX', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toCenterX',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.alignItems).toEqual('center')
  })

  test('toCenterY', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toCenterY',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.justifyContent).toEqual('center')
  })

  test('toTop', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toTop',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.justifyContent).toEqual('flex-start')
  })

  test('toRight', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toRight',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.alignItems).toEqual('flex-end')
  })

  test('toBottom', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toBottom',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.justifyContent).toEqual('flex-end')
  })

  test('toLeft', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toLeft',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.alignItems).toEqual('flex-start')
  })

  test('toBetween', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toBetween',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.justifyContent).toEqual('space-between')
  })

  test('toAround', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toAround',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.justifyContent).toEqual('space-around')
  })

  test('toEvenly', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'toEvenly',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style.justifyContent).toEqual('space-evenly')
  })
})

describe('row or column props', () => {
  const parser = new Parser()

  test('row', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'row',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style).toBeUndefined()
    expect(atom.isValid).toEqual(false)
    expect(atom.handled).toEqual(true)
  })

  test('column', () => {
    const atom = handleAtom!(
      new Atom({
        propKey: 'column',
        propValue: true,
      }),
      parser,
    )
    expect(atom.style).toBeUndefined()
    expect(atom.isValid).toEqual(false)
    expect(atom.handled).toEqual(true)
  })
})
