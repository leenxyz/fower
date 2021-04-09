import { Parser } from '@styli/parser'
import { Atom } from '@styli/atom'
import plugin, { borderValue } from '.'

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('debug')).toEqual(true)
  expect(isMatch!('adebug')).toEqual(false)
  expect(isMatch!('deghb')).toEqual(false)
})

test('debug', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'debug',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.border).toEqual(borderValue)
})

test('debugChildren', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'debugChildren',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.border).toEqual(borderValue)
  expect(atom.meta.childSelector).toEqual('*')
})
