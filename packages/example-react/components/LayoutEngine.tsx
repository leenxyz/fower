import React from 'react'
import { View, Box } from '@styli/react'

export const LayoutEngine = () => {
  return (
    <View>
      <Box>LayoutEngine</Box>
      <View h-240 f-12 debugChildren column right>
        <View s-100>AAA</View>
        <View s-100>BBB</View>
      </View>

      <View direction="row" right h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>
    </View>
  )
}
