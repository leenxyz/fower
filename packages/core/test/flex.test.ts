import { flexMaps, flexAlign } from '../src/constants'
import { isFlexBoxKey, isFlexItemKey, isAlignmentKey } from '../src/utils/propKey'
import {
  flexPropToStyle,
  flexItemPropToStyle,
  alignmentPropToStyle,
} from '../src/utils/propToStyle'
import { upFirst } from '../src/utils'

describe('flex-box', () => {
  it('isFlexBoxKey', () => {
    expect(isFlexBoxKey('row')).toEqual(true)
    expect(isFlexBoxKey('column')).toEqual(true)
    expect(isFlexBoxKey('wrap')).toEqual(true)
    expect(isFlexBoxKey('nowrap')).toEqual(true)

    const getFlexKeys = (prefix: 'justify' | 'align') =>
      Object.keys(flexMaps).map((flexKey) => `${prefix}${upFirst(flexKey)}`)
    const justifyKeys = getFlexKeys('justify')
    const alignKeys = getFlexKeys('align')
    for (let i = 0; i < justifyKeys.length; i++) {
      expect(isFlexBoxKey(justifyKeys[i])).toEqual(true)
      expect(isFlexBoxKey(alignKeys[i])).toEqual(true)
    }
  })

  it('flexPropToStyle', () => {
    expect(flexPropToStyle('row')).toMatchObject({ display: 'flex', flexDirection: 'row' })
    expect(flexPropToStyle('column')).toMatchObject({ display: 'flex', flexDirection: 'column' })
  })
})

describe('flex-item', () => {
  it('isFlexItemKey', () => {
    expect(isFlexItemKey('flex')).toEqual(true)
    expect(isFlexItemKey('flex-1')).toEqual(true)
  })

  it('flexItemPropToStyle', () => {
    expect(flexItemPropToStyle('flex', '5')).toMatchObject({ flex: '5' })
    expect(flexItemPropToStyle('flex-1', true)).toMatchObject({ flex: '1' })
  })
})

describe('flex-align', () => {
  it('isAlignmentKey', () => {
    for (let i = 0; i < flexAlign.length; i++) {
      expect(isAlignmentKey(flexAlign[i])).toEqual(true)
    }
    expect(isAlignmentKey('centerA')).toEqual(false)
  })

  it('alignmentPropToStyle', () => {
    expect(alignmentPropToStyle({ row: true, centerX: true })).toMatchObject({
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    })
  })
})
