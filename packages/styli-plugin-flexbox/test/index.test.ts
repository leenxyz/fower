// import { Atom } from '@styli/atom'
import plugin from '../src'

describe('styli-plugin-flex-box', () => {
  const { isMatch } = plugin()
  // const parser = {} as Parser

  it('isMatch', () => {
    expect(isMatch!('flex')).toEqual(true)
    expect(isMatch!('order')).toEqual(true)
  })

  // it('handleAtom', () => {
  // })
})
