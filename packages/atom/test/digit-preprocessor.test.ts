import { Atom, digitReg } from '../src'
import { setConfig } from '@fower/core'
import { presetWeb } from '@fower/preset-web'

beforeAll(() => {
  setConfig(presetWeb)
})

test('process <Box p-10 />', () => {
  const atom = new Atom({
    propKey: 'p-10',
    propValue: true,
  })
  const newAtom = atom.digitPreprocessor()
  expect(newAtom.key).toEqual('p')
  expect(newAtom.value).toEqual('10')
})

test('process <Box m-10rem />, with unit', () => {
  const atom = new Atom({
    propKey: 'm-10rem',
    propValue: true,
  })
  const newAtom = atom.digitPreprocessor()
  expect(newAtom.key).toEqual('m')
  expect(newAtom.value).toEqual('10rem')
})

test('process <Box p1 /> with spacings', () => {
  const atom = new Atom({
    propKey: 'p1',
    propValue: true,
  })
  const newAtom = atom.digitPreprocessor()
  expect(newAtom.key).toEqual('p')
  expect(newAtom.value).toEqual(4)
})

test('propKey is not matched', () => {
  const atom = new Atom({
    propKey: 'textFoo',
    propValue: true,
  })
  const newAtom = atom.digitPreprocessor()
  expect(newAtom.key).toEqual(atom.propKey)
})

test('digitReg', () => {
  const keys = [
    'm1',
    'mx-10',
    'mt--10px',
    'p4',
    'pl-1',
    'space1',
    'spaceX-10',
    'spaceY-10',
    'bottom-10',
    //....
  ]
  for (const key of keys) {
    expect(digitReg.test(key)).toBeTruthy()
  }
})
