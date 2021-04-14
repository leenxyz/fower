import { setConfig } from '@styli/core'
import { Atom } from '@styli/atom'
import plugin from '.'

setConfig({ unit: 'px' })

const { isMatch, handleAtom } = plugin()
const parser = {} as any

test('isMatch', () => {
  expect(isMatch!('textAlign')).toEqual(true)
  expect(isMatch!('textCenter')).toEqual(true)
})

test('textAlign="center"', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'textAlign',
      propValue: 'center',
    }),
    parser,
  )
  expect(atom.style.textAlign).toEqual('center')
})

test('textRight"', () => {
  const atom = handleAtom!(
    new Atom({
      propKey: 'textRight',
      propValue: true,
    }),
    parser,
  )
  expect(atom.style.textAlign).toEqual('right')
})
