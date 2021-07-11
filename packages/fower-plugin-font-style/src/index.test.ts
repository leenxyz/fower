import { setConfig, Parser, Atom } from '@fower/core'
import { presetWeb } from '@fower/preset-web'
import plugin from '.'

setConfig(presetWeb)

const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('italic')).toEqual(true)
  expect(isMatch!('notItalic')).toEqual(true)
})

test('italic', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'italic',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.fontStyle).toEqual('italic')
})

test('notItalic', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'notItalic',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.fontStyle).toEqual('normal')
})
