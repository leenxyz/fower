import { createStyle } from '../src/api'
import { styli } from '../src/styli'
import { isNumber } from '../src/utils'

describe('styli', () => {
  it('config', () => {
    styli.config({
      unit: '',
      colors: {
        themeColor: '#FCD423',
      },
      transformUnit(value) {
        if (isNumber(value)) {
          return Number(value) * 2 + styli.getConfig<string>('unit')
        }
        return '' + value
      },
    })
    expect(styli.getConfig('unit')).toEqual('')
    expect(styli.getConfig('colors')).toHaveProperty('themeColor', '#FCD423')
    expect(styli.getConfigs()).toHaveProperty('colors')
    expect(createStyle('theme-light')).toMatchObject({ color: '#FFF' })
    expect(createStyle('theme-dark')).toMatchObject({ color: '#000' })
    expect(createStyle('theme-aaa')).toMatchObject({})
    expect(createStyle('p-10')).toMatchObject({ padding: '20' })
  })
})
