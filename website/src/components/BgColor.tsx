import React from 'react'
import { View } from '@styli/react'

export default () => {
  return (
    <View row between>
      <View s-100 bgBlue100 center>
        blue300
      </View>
      <View s-100 bgGray100 center>
        gray100
      </View>
      <View s-100 bgRed400 center>
        red400
      </View>
      <View s-100 bgGreen600 center>
        green600
      </View>
    </View>
  )
}
