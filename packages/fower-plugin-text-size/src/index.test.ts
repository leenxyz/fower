import { setConfig, Atom, Parser } from '@fower/core'
import { presetWeb } from '@fower/preset-web'
import plugin from '.'

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

beforeAll(() => {
  setConfig(presetWeb)
})

test('isMatch', () => {
  expect(isMatch!('text', parser)).toEqual(true)
  expect(isMatch!('textSM', parser)).toEqual(true)
})

test('text={10}', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'text',
      propValue: 10,
    }),
    parser,
  )
  expect(atom.style.fontSize).toEqual(10)
})

test('textSM', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'textSM',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.fontSize).toEqual(14)
})
