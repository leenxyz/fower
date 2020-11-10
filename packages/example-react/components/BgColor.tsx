import React from 'react'
import { View, Heading } from '@styli/react'

export const BgColor = () => {
  return (
    <View>
      <Heading f-30 fontBold>
        BackgroundColor
      </Heading>

      <View f-20 bgRed50>
        BgRed50
      </View>

      <View f-20 bgGreen40>
        BgGreen40
      </View>

      <View f-20 bg="#000">
        #000
      </View>

      <View f-20 bg="#000.5">
        bg #000.5
      </View>

      <View f-20 bgRed50 bgGreen50--hover>
        bgGreen50--hover
      </View>

      <View f-20 bg="#000" bg--hover="#000.5">
        bg--hover="#000.5"
      </View>

      <View f-20 bg={['yellowgreen', 'deeppink', 'gray', 'info']}>
        backgroundColor=['yellowgreen', 'deeppink', 'gray', 'info']
      </View>
    </View>
  )
}
