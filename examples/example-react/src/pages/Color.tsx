import React from 'react';
import { View, Box } from '@styli/react';

export default () => {
  return (
    <View>
      <Box f-30 fontBold>
        Color
      </Box>

      <View f-20 red500>
        Red500
      </View>

      <View f-20 red500-L30>
        Red500-L30
      </View>

      <View f-20 green400>
        Green400
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

      <View f-20 color="yellowgreen">
        yellowgreen
      </View>

      <View f-20 color="#000">
        #000
      </View>

      <View f-20 color="#000-T50">
        #000-T50
      </View>

      <View f-20 color="#666-D20">
        #666-D20
      </View>

      <View f-20 color="#666-L20">
        color="#666-L20"
      </View>

      <View f-20 color="green400">
        color="green400"
      </View>

      <View f-20 color="green400-O20">
        color="green400-O20"
      </View>

      <View f-20 color="green400-T20">
        color="green400-T20"
      </View>

      <View f-20 color="primary">
        color="primary"
      </View>

      <View f-20 color="primary-D40">
        color="primary-D40"
      </View>

      <View f-20 red500 green500--hover>
        green500--hover
      </View>

      <View f-20 red500 green500-T20--hover>
        green500-T20--hover
      </View>

      <View f-20 red500 green500-D20--hover>
        green500-D20--hover
      </View>

      <View f-20 color="#000" c--hover="#000-T50">
        #000--hover
      </View>

      <View f-20 colorPrimary colorInfo--hover>
        colorInfo--hover
      </View>

      <View f-20 red500 green500--active>
        green500--active
      </View>

      <View f-20 color={['yellowgreen', 'purple', 'deeppink', 'info']}>
        color=['yellowgreen', 'purple', 'deeppink', 'red']
      </View>

      <View f-20 trueGray500>
        trueGray500
      </View>
    </View>
  );
};
