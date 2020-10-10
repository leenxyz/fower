import React, { useState } from 'react'
import { View } from '@styli/react'

export default () => {
  const [lineHeight, setLineHeight] = useState(20)
  const [leadingType, setLeadingType] = useState('leadingNone')

  const fLineHeight = {
    [`leading-${lineHeight}`]: true,
  }

  const types = [
    'leadingNone',
    'leadingTight',
    'leadingSnug',
    'leadingNormal',
    'leadingRelaxed',
    'leadingLoose',
  ]

  return (
    <View>
      <View row between>
        <View s-100 bgBlue100>
          <View bgBlue300 text-14 {...fLineHeight}>
            leading-{lineHeight}
          </View>
        </View>
        <View s-100 bgBlue100>
          <View bgBlue300 text-14 {...{ [leadingType]: true }}>
            {leadingType}
          </View>
        </View>
      </View>
      <View row centerY my-20>
        <View mr-20>LineHeight Value: </View>
        <input
          type="range"
          value={lineHeight}
          max="50"
          onChange={(e) => {
            setLineHeight(+e.target.value)
          }}
        />
        <View>{lineHeight}</View>
      </View>
      <View row centerY my-20>
        <View mr-20>FontWeight Value: </View>
        <View row wrap>
          {types.map((type, idx) => {
            return (
              <View key={type} w-200>
                <input
                  type="radio"
                  id={type}
                  defaultChecked={!idx}
                  name="font-weight"
                  value={type}
                  onChange={(e) => setLeadingType(e.currentTarget.value)}
                />
                <label htmlFor={type}>{type}</label>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}
