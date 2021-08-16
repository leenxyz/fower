import { Atom } from '@fower/core'
import plugin from '.'

const { isMatch, handleAtom } = plugin()

const parser = {} as any
test('isMatch', () => {
  const keys = ['breakNormal', 'breakWords', 'breakAll']
  for (const key of keys) {
    expect(isMatch(key)).toEqual(true)
  }

  expect(isMatch('overflowX')).toEqual(false)
})

test('breakNormal', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'breakNormal',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style).toMatchObject({
    overflowWrap: 'normal',
    wordBreak: 'normal',
  })
})

test('breakWords', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'breakWords',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.overflowWrap).toEqual('break-word')
})

test('breakAll', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'breakAll',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.wordBreak).toEqual('break-all')
})
