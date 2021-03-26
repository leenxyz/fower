// import { Atom, ParserType } from '@styli/types'
import plugin from '../src'

describe('styli-plugin-flex-box', () => {
  const { isMatch } = plugin()
  // const parser = {} as ParserType

  it('isMatch', () => {
    expect(isMatch!('flex')).toEqual(true)
    expect(isMatch!('order')).toEqual(true)
  })

  // it('onAtomStyleCreate', () => {
  // })
})
