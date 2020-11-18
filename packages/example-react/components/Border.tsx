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

        <View s-100 border="4px solid green30-O50">
          border="4px solid green30-D20"
        </View>

        <View s-100 borderT="4px solid  green40">
          borderT="1px solid green40"
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

        <View s-100 border="4px solid gray" border--hover="4px solid red30-D5">
          border--hover="1px solid red30"
        </View>
      </View>
    </View>
  )
}
