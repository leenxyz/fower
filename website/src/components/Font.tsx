import React, { useState } from 'react'
import { View } from '@styli/react'

export const FontColor = () => {
  return (
    <View row between white>
      <View s-100 bgBlue100 blue300 center>
        bgBlue300
      </View>
      <View s-100 bgBlue100 primaryColor center>
        primaryColor
      </View>
      <View s-100 bgBlue100 successColor center>
        successColor
      </View>
      <View s-100 bgBlue100 red900 center>
        red900
      </View>
    </View>
  )
}

export const FontWeight = () => {
  const [weight, setWeight] = useState('fontHairline')

  const fWeight = {
    [`${weight}`]: true,
  }

  const types = [
    'fontHairline',
    'fontThin',
    'fontLight',
    'fontNormal',
    'fontMedium',
    'fontSemibold',
    'fontBold',
    'fontExtrabold',
  ]

  return (
    <View>
      <View row between>
        <View s-100 bgBlue100 center {...fWeight}>
          {weight}
        </View>
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
                  onChange={(e) => setWeight(e.currentTarget.value)}
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

export const TextAlign = () => {
  const [align, setAlign] = useState('textLeft')

  const fAlign = {
    [`${align}`]: true,
  }

  const types = ['textLeft', 'textCenter', 'textRight', 'textJustify']

  return (
    <View>
      <View row between>
        <View s-100 bgBlue100 {...fAlign}>
          {align}
        </View>
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
                  onChange={(e) => setAlign(e.currentTarget.value)}
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
