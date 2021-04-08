import { Atom } from '@styli/atom'
import { configure } from '@styli/core'
import { presetWeb } from '@styli/preset-web'
import { atomPreprocessor } from './atom-preprocessor'

beforeAll(() => {
  configure(presetWeb)
})

test.only('atomPreprocessor', () => {
  const atom = new Atom({
    propKey: 'p10--hover',
    propValue: true,
  })
  const newAtom = atomPreprocessor(atom, {} as any)
  expect(newAtom.handled).toBeTruthy()
})
