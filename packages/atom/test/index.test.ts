import { Atom } from '../src'

test('new Atom()', () => {
  const atom = new Atom({
    propKey: 'p-10',
  })
  expect(atom instanceof Atom).toBeTruthy()
})

test('atomd with <Box p-10></Box>', () => {
  const atom = new Atom({
    propKey: 'p-10',
    propValue: true,
  })
  expect(atom.id).toEqual('p-10')
  expect(atom.isValueProp).toBeFalsy()
})

test('atom.id with <Box p-10={false}></Box>', () => {
  const atom = new Atom({
    propKey: 'p-10',
    propValue: false,
  })
  expect(atom.id).toEqual('p-10-false')
  expect(atom.isValueProp).toBeFalsy()
})

test('atom.id with <Box p={10}></Box>', () => {
  const atom = new Atom({
    propKey: 'p',
    propValue: 10,
  })
  expect(atom.id).toEqual('p-10')
  expect(atom.isValueProp).toBeTruthy()
})

test('atom get styleKeysHash() with valid style', () => {
  const atom = new Atom({ propKey: 'p-10' })
  atom.style = { color: '#999' }
  expect(atom.styleKeysHash).toEqual('color' + JSON.stringify(atom.meta))
})

test('atom get styleKeysHash() empty style', () => {
  const atom = new Atom({ propKey: 'p-10' })
  atom.style = undefined as any
  expect(atom.styleKeysHash).toEqual('' + JSON.stringify(atom.meta))
})
