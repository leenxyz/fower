import { createStyle, parseModifiers, toFinalProps } from '../src/api'
import { Styli } from '../src/styli'
import { toStyle } from '../src/plugins'

describe('api', () => {
  it('createStyle', () => {
    expect(createStyle('p-10')).toMatchObject({ padding: '10px' })
    expect(createStyle('p-10', 'm-10')).toMatchObject({ padding: '10px', margin: '10px' })
    expect(
      createStyle('p-10', 'm-10', {
        background: 'red',
      }),
    ).toMatchObject({ padding: '10px', margin: '10px', background: 'red' })
  })

  it('toFinalProps', () => {
    Styli.config({ plugins: [toStyle] })
    expect(toFinalProps({ 'p-10': true })).toMatchObject({ style: { padding: '10px' } })
  })

  it('parseModifiers', () => {
    expect(parseModifiers({ 'p-10': true })).toMatchObject({
      styliStyle: { padding: '10px' },
      styliKeys: ['p-10'],
    })
  })
})
