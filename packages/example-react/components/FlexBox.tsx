import React from 'react'
import { View, Heading } from '@styli/react'

export const FlexBox = () => {
  return (
    <View>
      <Heading>Border</Heading>
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
