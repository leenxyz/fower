import { getValue, modifierToProps } from '../src/utils'

describe('styli-utils', () => {

  it('getValue', () => {
    expect(getValue(10)).toEqual('10px')
  })

  it('modifierToProps', () => {
    expect(modifierToProps('p-10')).toEqual({ 'p-10': true })
  })
})
