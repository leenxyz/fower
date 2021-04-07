import { Atom } from '@styli/atom'
import { styli } from '@styli/core'
import { presetWeb } from '@styli/preset-web'
import { atomPreprocessor } from './atom-preprocessor'

beforeAll(() => {
  styli.configure(presetWeb)
})

test.only('atomPreprocessor', () => {
  const atom = new Atom({
    propKey: 'p10--hover',
    propValue: true,
  })
  const newAtom = atomPreprocessor(atom, {} as any, styli)
  expect(newAtom.handled).toBeTruthy()
})
