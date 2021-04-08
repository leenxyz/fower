import { Atom } from '@styli/atom'
import { configure } from '@styli/core'
import { presetWeb } from '@styli/preset-web'
import { atomPreprocessor } from './atom-preprocessor'

beforeAll(() => {
  configure(presetWeb)
})

test('meta of normal prop is empty', () => {
  const atom = atomPreprocessor(
    new Atom({
      propKey: 'p10',
      propValue: true,
    }),
  )
  expect(atom.meta).toMatchObject({})
  expect(atom.key).toEqual('p')
})

test('false prop', () => {
  const atom = atomPreprocessor(
    new Atom({
      propKey: 'p10',
      propValue: false,
    }),
  )
  expect(atom.handled).toBeTruthy()
  expect(atom.isValid).toBeFalsy()
  expect(atom.key).toEqual('p10')
})

test('invalid prop', () => {
  const atom = atomPreprocessor(
    new Atom({
      propKey: 'styliName',
      propValue: 'foo',
    }),
  )
  expect(atom.handled).toBeTruthy()
  expect(atom.isValid).toBeFalsy()
})

test('if pseudo, meta.pseudo should be truthy', () => {
  const atom = atomPreprocessor(
    new Atom({
      propKey: 'toCenter--hover',
      propValue: true,
    }),
  )
  expect(atom.meta.pseudo).toEqual(':hover')
  expect(atom.key).toEqual('toCenter')

  const atom2 = atomPreprocessor(
    new Atom({
      propKey: 'toCenter--after',
      propValue: true,
    }),
  )
  expect(atom2.meta.pseudo).toEqual('::after')
  expect(atom.key).toEqual('toCenter')
})

test('if mode, meta.mode should be truthy', () => {
  const atom = atomPreprocessor(
    new Atom({
      propKey: 'p10--dark',
      propValue: true,
    }),
  )
  expect(atom.meta.mode).toEqual('dark')
  expect(atom.key).toEqual('p')
})

test('if responsive, meta.breakpoint should be truthy', () => {
  const atom = atomPreprocessor(
    new Atom({
      propKey: 'p10--sm',
      propValue: true,
    }),
  )
  expect(atom.meta.breakpoint).toEqual('640px')
  expect(atom.key).toEqual('p')
})

test('if important, meta.important should be truthy', () => {
  const atom = atomPreprocessor(
    new Atom({
      propKey: 'p10--i',
      propValue: true,
    }),
  )
  expect(atom.meta.important).toBeTruthy()
  expect(atom.key).toEqual('p')
})

test('compose postfix', () => {
  const atom1 = atomPreprocessor(
    new Atom({
      propKey: 'p10--dark--i--sm--hover',
      propValue: true,
    }),
  )
  expect(atom1.meta.mode).toEqual('dark')
  expect(atom1.meta.pseudo).toEqual(':hover')
  expect(atom1.meta.breakpoint).toEqual('640px')
  expect(atom1.meta.important).toEqual(true)
  expect(atom1.key).toEqual('p')

  const atom2 = atomPreprocessor(
    new Atom({
      propKey: 'red200--dark--i--sm--hover--T20',
      propValue: true,
    }),
  )
  expect(atom2.meta.mode).toEqual('dark')
  expect(atom2.meta.pseudo).toEqual(':hover')
  expect(atom2.meta.breakpoint).toEqual('640px')
  expect(atom2.meta.important).toEqual(true)
  expect(atom2.meta.colorPostfix).toEqual('T20')
  expect(atom2.key).toEqual('red200')
})

test('if color postfix, meta.colorPostfix should be truthy', () => {
  const atom = atomPreprocessor(
    new Atom({
      propKey: 'red200--T20',
      propValue: true,
    }),
  )
  expect(atom.meta.colorPostfix).toEqual('T20')
  expect(atom.key).toEqual('red200')
})

test('if color postfix in propValue', () => {
  const atom = atomPreprocessor(
    new Atom({
      propKey: 'color',
      propValue: 'red200--T20',
    }),
  )
  expect(atom.value).toEqual('red200')
  expect(atom.meta.colorPostfix).toEqual('T20')
  expect(atom.key).toEqual('color')
})

test('no match plugin', () => {
  const atom = atomPreprocessor(
    new Atom({
      propKey: 'hello--hover',
      propValue: true,
    }),
  )
  expect(atom.handled).toBeFalsy()
})
