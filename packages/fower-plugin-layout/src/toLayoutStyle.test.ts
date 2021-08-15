import { toLayoutStyle } from './toLayoutStyle'

describe('When row', () => {
  test('toTop', () => {
    const style = toLayoutStyle('toTop', 'row')
    expect(style.alignItems).toEqual('flex-start')
  })

  test('toLeft', () => {
    const style = toLayoutStyle('toLeft', 'row')
    expect(style.justifyContent).toEqual('flex-start')
  })

  test('toBottom', () => {
    const style = toLayoutStyle('toBottom', 'row')
    expect(style.alignItems).toEqual('flex-end')
  })

  test('toRight', () => {
    const style = toLayoutStyle('toRight', 'row')
    expect(style.justifyContent).toEqual('flex-end')
  })

  test('toCenterX', () => {
    const style = toLayoutStyle('toCenterX', 'row')
    expect(style.justifyContent).toEqual('center')
  })

  test('toBetween', () => {
    const style = toLayoutStyle('toBetween', 'row')
    expect(style.justifyContent).toEqual('space-between')
  })

  test('toAround', () => {
    const style = toLayoutStyle('toAround', 'row')
    expect(style.justifyContent).toEqual('space-around')
  })

  test('toEvenly', () => {
    const style = toLayoutStyle('toEvenly', 'row')
    expect(style.justifyContent).toEqual('space-evenly')
  })

  test('selfTop', () => {
    const style = toLayoutStyle('selfTop', 'row')
    expect(style.alignSelf).toEqual('flex-start')
  })

  test('selfRight', () => {
    const style = toLayoutStyle('selfRight', 'row')
    expect(style.alignSelf).toEqual('flex-end')
  })

  test('selfCenter', () => {
    const style = toLayoutStyle('selfCenter', 'row')
    expect(style.alignSelf).toEqual('center')
  })

  test('selfAuto', () => {
    const style = toLayoutStyle('selfAuto', 'row')
    expect(style.alignSelf).toEqual('auto')
  })
})

describe('When column', () => {
  test('toTop', () => {
    const style = toLayoutStyle('toTop', 'column')
    expect(style.justifyContent).toEqual('flex-start')
  })

  test('toLeft', () => {
    const style = toLayoutStyle('toLeft', 'column')
    expect(style.alignItems).toEqual('flex-start')
  })
})

describe('When column reverse', () => {
  test('toTop', () => {
    const style = toLayoutStyle('toTop', 'columnReverse')
    expect(style.justifyContent).toEqual('flex-end')
  })

  test('toBottom', () => {
    const style = toLayoutStyle('toBottom', 'columnReverse')
    expect(style.justifyContent).toEqual('flex-start')
  })
})

describe('When row reverse', () => {
  test('toLeft', () => {
    const style = toLayoutStyle('toLeft', 'rowReverse')
    expect(style.justifyContent).toEqual('flex-end')
  })

  test('toRight', () => {
    const style = toLayoutStyle('toRight', 'rowReverse')
    expect(style.justifyContent).toEqual('flex-start')
  })
})
