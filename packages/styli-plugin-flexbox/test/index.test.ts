// import { Atom, SheetType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-flex-box', () => {
  const { isMatch } = plugin()
  // const sheet = {} as SheetType

  it('isMatch', () => {
    expect(isMatch!('flex')).toEqual(true)
    expect(isMatch!('order')).toEqual(true)
  })

  // it('onAtomStyleCreate', () => {
  // })
})
