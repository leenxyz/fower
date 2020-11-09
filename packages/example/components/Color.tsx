import React from 'react'
import { View, Heading } from '@styli/react'

export const Color = () => {
  return (
    <View>
      <Heading f-30 fontBold>
        Color
      </Heading>

      <View f-20 red50>
        Red50
      </View>

      <View f-20 green40>
        Green40
      </View>

      <View f-20 colorPrimary>
        colorPrimary
      </View>

      <View f-20 color="yellowgreen">
        yellowgreen
      </View>

      <View f-20 color="#000">
        #000
      </View>

      <View f-20 color="#000.5">
        #000.5
      </View>

      <View f-20 red50 green50--hover>
        green50--hover
      </View>

      <View f-20 color="#000" color--hover="#000.5">
        #000--hover
      </View>

      <View f-20 colorPrimary colorInfo--hover>
        colorInfo--hover
      </View>

      <View f-20 red50 green50--active>
        green50--active
      </View>

      <View f-20 fontColor={['yellowgreen', 'deeppink', 'gray', 'info']}>
        color=['yellowgreen', 'deeppink', 'gray', 'red']
      </View>
    </View>
  )
}
