import React from 'react'
import { View, Box } from '@styli/react'

export const FlexBox = () => {
  return (
    <View>
      <Box>FlexBox</Box>
      <View h-200 f-12 debugChildren row justifyBetween itemsEnd>
        <View s-100>AAA</View>
        <View selfStretch>BBB</View>
        <View s-100 center>
          CCC
        </View>
      </View>
    </View>
  )
}
