import { Atom } from '@styli/atom'
import { setConfig } from '@styli/core'
import { Parser } from '@styli/parser'
import { presetWeb } from '@styli/preset-web'
import plugin from '.'

const { isMatch, handleAtom } = plugin()

const parser = new Parser({})

beforeAll(() => {
  setConfig(presetWeb)
})

test('isMatch', () => {
  expect(isMatch!('space')).toEqual(true)
  expect(isMatch!('spaceX')).toEqual(true)
  expect(isMatch!('spaceY')).toEqual(true)
})

test('space', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'space',
      propValue: '8',
    }),
    parser,
  )
  expect(atom.style.marginRight).toEqual('8')
  expect(atom.style.marginBottom).toEqual('8')
  expect(atom.meta.childSelector).toEqual('>*:not(:last-child)')
})

test('spaceX', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'spaceX',
      propValue: '8',
    }),
    parser,
  )
  expect(atom.style.marginRight).toEqual('8')
  expect(atom.meta.childSelector).toEqual('>*:not(:last-child)')
})
