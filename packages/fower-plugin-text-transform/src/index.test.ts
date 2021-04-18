import { Atom } from '@fower/atom'
import plugin from '.'

const { isMatch, handleAtom } = plugin()

const parser = {} as any
test('isMatch', () => {
  const caseKeys = ['normalcase', 'uppercase', 'lowercase', 'capitalize']
  for (const key of caseKeys) {
    expect(isMatch!(key)).toEqual(true)
  }
})

test('normalcase', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'normalcase',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.textTransform).toEqual('none')
})

test('uppercase', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'uppercase',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.textTransform).toEqual('uppercase')
})
