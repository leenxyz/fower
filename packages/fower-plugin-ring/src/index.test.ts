import { setConfig, store, Parser, Atom } from '@fower/core'
import { presetWeb } from '@fower/preset-web'
import plugin from '.'

setConfig(presetWeb)

const { colors } = store.config.theme
const { isMatch, handleAtom } = plugin()
const parser = new Parser({})

test('isMatch', () => {
  expect(isMatch!('ring')).toEqual(true)
  expect(isMatch!('ring-1')).toEqual(true)
  expect(isMatch!('ring-2')).toEqual(true)
  expect(isMatch!('ringRed100-1')).toEqual(true)
  expect(isMatch!('ringRed100-2')).toEqual(true)
})

test('ring', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'ring',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.boxShadow).toEqual(`0 0 0 1px ${colors.brand500}`)
})

test('ring-1', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'ring-1',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.boxShadow).toEqual(`0 0 0 1px ${colors.brand500}`)
})

test('ringRed100-1', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'ringRed100-1',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.boxShadow).toEqual(`0 0 0 1px ${colors.red100}`)
})

test('ringRed200-2', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'ringRed200-2',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.boxShadow).toEqual(`0 0 0 2px ${colors.red200}`)
})

test('ringRed100-1--D10', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'ringRed100-1--D10',
      propValue: true,
    }),
    parser,
  )
  expect(atom.meta.colorPostfix).toEqual('D10')
  expect(atom.style.boxShadow).toEqual(`0 0 0 1px #e5c9c9`)
})

test('Invalid color: ringFoo200-2', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'ringFoo200-2',
      propValue: true,
    }),
    parser,
  )

  expect(atom.style).toBeUndefined()
})
