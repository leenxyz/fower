import { opacify, transparentize, formatColor } from './index'

test('opacify()', () => {
  expect(opacify('rgba(0,0,0,0.2)', 20)).toEqual('rgba(0,0,0,0.4)')
})

test('transparentize()', () => {
  expect(transparentize('#000', 20)).toEqual('rgba(0,0,0,0.8)')
})

test('formatColor()', () => {
  expect(formatColor('#000', 'T20')).toEqual('rgba(0,0,0,0.8)')
  expect(formatColor('rgba(0,0,0,0.6)', 'O20')).toEqual('rgba(0,0,0,0.8)')
  expect(formatColor('#666666', 'D20')).toEqual('#333333')
  expect(formatColor('#666666', 'L20')).toEqual('#999999')

  expect(formatColor('#666666', '')).toEqual('#666666')
})
