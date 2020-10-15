import { createStyle, toFinalProps } from '../src'

describe('api', () => {
  it('createStyle', () => {
    expect(createStyle('p-10')).toMatchObject({ padding: '10' })
    expect(createStyle('p-10', 'm-10')).toMatchObject({ padding: '10', margin: '10' })
    expect(
      createStyle('p-10', 'm-10', {
        background: 'red',
      }),
    ).toMatchObject({ padding: '10', margin: '10', background: 'red' })
  })

  it('toFinalProps', () => {
    expect(toFinalProps({ 'p-10': true })).toMatchObject({ style: { padding: '10' } })
  })
})
