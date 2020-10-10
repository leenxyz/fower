import React from 'react'
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
