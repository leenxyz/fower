import { Atom } from '@styli/atom'
import { digitPreprocessor, digitReg } from './digit-preprocessor'

let spacings: any

beforeEach(() => {
  spacings = {
    1: 4,
  }
})

test('process <Box p-10 />', () => {
  const atom = new Atom({
    propKey: 'p-10',
    propValue: true,
  })
  const newAtom = digitPreprocessor(atom, spacings)
  expect(newAtom.key).toEqual('p')
  expect(newAtom.value).toEqual('10')
})

test('process <Box m-10rem />, with unit', () => {
  const atom = new Atom({
    propKey: 'm-10rem',
    propValue: true,
  })
  const newAtom = digitPreprocessor(atom, spacings)
  expect(newAtom.key).toEqual('m')
  expect(newAtom.value).toEqual('10rem')
})

test('process <Box p1 /> with spacings', () => {
  const atom = new Atom({
    propKey: 'p1',
    propValue: true,
  })
  const newAtom = digitPreprocessor(atom, spacings)
  expect(newAtom.key).toEqual('p')
  expect(newAtom.value).toEqual(4)
})

test('propKey is not matched', () => {
  const atom = new Atom({
    propKey: 'textMD',
    propValue: true,
  })
  const newAtom = digitPreprocessor(atom, spacings)
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
