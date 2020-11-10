import React from 'react'
import { View, Heading } from '@styli/react'

export const Border = () => {
  return (
    <View>
      <Heading>Border</Heading>
      <View f-12 evenly wrap>
        <View s-100 border="1px solid gray">
          border="1px solid gray"
        </View>

        <View s-100 borderT="1px solid gray">
          borderT="1px solid gray"
        </View>

        <View s-100 borderR="1px solid gray">
          borderR="1px solid gray"
        </View>

        <View s-100 borderB="1px solid gray">
          borderB="1px solid gray"
        </View>

        <View s-100 borderL="1px solid gray">
          borderL="1px solid gray"
        </View>

        <View s-100 borderX="1px solid gray">
          borderX="1px solid gray"
        </View>

        <View s-100 borderY="1px solid gray">
          borderY="1px solid gray"
        </View>
      </View>
    </View>
  )
}
