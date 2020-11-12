import React from 'react'
import { View, Heading } from '@styli/react'

export const LayoutEngine = () => {
  return (
    <View>
      <Heading>LayoutEngine</Heading>
      <View h-200 f-12 debugChildren column right>
        <View s-100>AAA</View>
        {/* <View selfStretch>BBB</View> */}
        <View s-100 center>
          CCC
        </View>
      </View>
    </View>
  )
}
