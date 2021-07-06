import { setConfig } from '@fower/core'
import { presetWeb } from '@fower/preset-web'
import { Atom } from '../src'

beforeAll(() => {
  setConfig(presetWeb)
})

test('meta of normal prop is empty', () => {
  const atom = new Atom({ propKey: 'p10', propValue: true })
  atom.postfixPreprocessor()
  expect(atom.meta).toMatchObject({})
  expect(atom.key).toEqual('p')
})

test('false prop', () => {
  const atom = new Atom({ propKey: 'p10', propValue: false })
  atom.postfixPreprocessor()
  expect(atom.handled).toBeTruthy()
  expect(atom.isValid).toBeFalsy()
})

test('if pseudo, meta.pseudo should be truthy', () => {
  const atom = new Atom({
    propKey: 'toCenter--hover',
    propValue: true,
  })
  atom.postfixPreprocessor()
  expect(atom.meta.pseudo).toEqual('hover')
  expect(atom.meta.pseudoPrefix).toEqual(':')
  expect(atom.key).toEqual('toCenter')

  const atom2 = new Atom({
    propKey: 'toCenter--after',
    propValue: true,
  })
  atom2.postfixPreprocessor()
  expect(atom2.meta.pseudo).toEqual('after')
  expect(atom2.meta.pseudoPrefix).toEqual('::')
  expect(atom2.key).toEqual('toCenter')
})

test('if mode, meta.mode should be truthy', () => {
  const atom = new Atom({
    propKey: 'p10--dark',
    propValue: true,
  })

  atom.postfixPreprocessor()
  expect(atom.meta.mode).toEqual('dark')
  expect(atom.key).toEqual('p')
})

test('if responsive, meta.breakpoint should be truthy', () => {
  const atom = new Atom({
    propKey: 'p10--sm',
    propValue: true,
  })
  atom.postfixPreprocessor()
  expect(atom.meta.breakpoint).toEqual('sm')
  expect(atom.key).toEqual('p')
})

test('if important, meta.important should be truthy', () => {
  const atom = new Atom({
    propKey: 'p10--i',
    propValue: true,
  })

  atom.postfixPreprocessor()
  expect(atom.meta.important).toBeTruthy()
  expect(atom.key).toEqual('p')
})

test('compose postfix', () => {
  const atom1 = new Atom({
    propKey: 'p10--dark--i--sm--hover',
    propValue: true,
  })

  atom1.postfixPreprocessor()
  expect(atom1.meta.mode).toEqual('dark')
  expect(atom1.meta.pseudo).toEqual('hover')
  expect(atom1.meta.pseudoPrefix).toEqual(':')
  expect(atom1.meta.breakpoint).toEqual('sm')
  expect(atom1.meta.important).toEqual(true)
  expect(atom1.key).toEqual('p')

  const atom2 = new Atom({
    propKey: 'red200--dark--i--md--hover--T20',
    propValue: true,
  })
  atom2.postfixPreprocessor()
  expect(atom2.meta.mode).toEqual('dark')
  expect(atom2.meta.pseudo).toEqual('hover')
  expect(atom2.meta.pseudoPrefix).toEqual(':')
  expect(atom2.meta.breakpoint).toEqual('md')
  expect(atom2.meta.important).toEqual(true)
  expect(atom2.meta.colorPostfix).toEqual('T20')
  expect(atom2.key).toEqual('red200')
})

test('if color postfix, meta.colorPostfix should be truthy', () => {
  const atom = new Atom({
    propKey: 'red200--T20',
    propValue: true,
  })

  atom.postfixPreprocessor()
  expect(atom.meta.colorPostfix).toEqual('T20')
  expect(atom.key).toEqual('red200')
})

test('if color postfix in propValue', () => {
  const atom = new Atom({
    propKey: 'color',
    propValue: 'red200--T20',
  })
  atom.postfixPreprocessor()

  expect(atom.value).toEqual('red200')
  expect(atom.meta.colorPostfix).toEqual('T20')
  expect(atom.key).toEqual('color')
})

test('no match plugin', () => {
  const atom = new Atom({
    propKey: 'hello--hover',
    propValue: true,
  })
  atom.postfixPreprocessor()

  expect(atom.handled).toBeFalsy()
})
