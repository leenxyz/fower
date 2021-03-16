import React from 'react';
import { View, Box } from '@styli/react';

export default () => {
  return (
    <View>
      <Box>LayoutEngine</Box>
      <View h-240 f-12 debugChildren column toRight>
        <View s-100>AAA</View>
        <View s-100>BBB</View>
      </View>

      <Box>toRight</Box>
      <View direction="row" toRight h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>

      <Box>centerX</Box>
      <View direction="row" centerX h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>

      <Box>toRight toBottom</Box>
      <View direction="row" toRight toBottom h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>

      <View h-240 f-12 debugChildren row between stretch>
        <View>AAA</View>
        <View>BBB</View>
      </View>
    </View>
  );
};
