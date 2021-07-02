import { CSSObject } from '@fower/types'
import { toRules, parse, flatten } from '../src'

describe('css object processor', () => {
  test('flatten empty cssObject', () => {
    const cssObject: any = {}
    const result = flatten(cssObject)

    expect(Array.isArray(result)).toEqual(true)
    expect(result.length).toEqual(0)
  })

  test('flatten no nested  cssObject', () => {
    const cssObject: CSSObject = {
      padding: 1,
      margin: '10px',
    }

    const result = flatten(cssObject)
    expect(Array.isArray(result)).toEqual(true)
    expect(result.length).toEqual(2)
    expect(result[0][0]).toMatchObject({ padding: 1 })
  })

  test('flatten nested cssObject', () => {
    const cssObject: CSSObject = {
      '.title': {
        padding: 1,
        margin: '10px',
        ':hover': {
          backdropFilter: 'inherit',
          background: 'red',
        },
      },
      padding: 1,
      margin: '10px',
    }

    const result = flatten(cssObject)
    expect(Array.isArray(result)).toEqual(true)
    expect(result.length).toEqual(6)
  })

  test('parse', () => {
    const cssObject: CSSObject = {
      '.title': {
        padding: 1,
        margin: '10px',
        ':hover': {
          background: 'red',
        },
      },
      padding: 1,
      margin: '10px',
    }

    const parsed = parse(cssObject)

    expect(Array.isArray(parsed)).toEqual(true)
    expect(parsed.length).toEqual(5)

    expect(parsed[0]).toMatchObject({
      selector: ' .title', // TODO
      style: { padding: 1 },
    })
  })

  test('toRules', () => {
    const cssObject: CSSObject = {
      '.title': {
        padding: 1,
        margin: '10px',
        ':hover': {
          background: 'red',
        },
      },
      padding: 1,
      margin: '10px',
      ':hover': {
        background: 'blue',
      },
    }

    const rules = toRules(cssObject)

    expect(Array.isArray(rules)).toEqual(true)
  })
})
