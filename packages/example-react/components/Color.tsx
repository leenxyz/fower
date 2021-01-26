import React from 'react'
import { View, Box } from '@styli/react'

export const Color = () => {
  return (
    <View>
      <Box f-30 fontBold>
        Color
      </Box>

      <View f-20 red50>
        Red50
      </View>

      <View f-20 red50-L30>
        Red50-L30
      </View>

      <View f-20 green40>
        Green40
      </View>

      <View f-20 colorPrimary>
        colorPrimary
      </View>

      <View f-20 colorPrimary-O20>
        colorPrimary-O20
      </View>

      <View f-20 colorPrimary-D20>
        colorPrimary-D20
      </View>

      <View f-20 colorPrimary-L20>
        colorPrimary-L20
      </View>

      <View f-20 c="yellowgreen">
        yellowgreen
      </View>

      <View f-20 c="#000">
        #000
      </View>

      <View f-20 c="#000-T50">
        #000-T50
      </View>

      <View f-20 c="#666-D20">
        #666-D20
      </View>

      <View f-20 c="#666-L20">
        c="#666-L20"
      </View>

      <View f-20 c="green40">
        c="green40"
      </View>

      <View f-20 c="green40-O20">
        c="green40-O20"
      </View>

      <View f-20 c="green40-T20">
        c="green40-T20"
      </View>

      {/* <View f-20 c="primary">
        c="primary"
      </View>

      <View f-20 c="primary-D40">
        c="primary-D40"
      </View> */}

      <View f-20 red50 green50--hover>
        green50--hover
      </View>

      <View f-20 red50 green50-T20--hover>
        green50-T20--hover
      </View>

      <View f-20 red50 green50-D20--hover>
        green50-D20--hover
      </View>

      <View f-20 c="#000" c--hover="#000-T50">
        #000--hover
      </View>

      <View f-20 colorPrimary colorInfo--hover>
        colorInfo--hover
      </View>

      <View f-20 red50 green50--active>
        green50--active
      </View>

      <View f-20 c={['yellowgreen', 'purple', 'deeppink', 'info']}>
        c=['yellowgreen', 'purple', 'deeppink', 'red']
      </View>
    </View>
  )
}
