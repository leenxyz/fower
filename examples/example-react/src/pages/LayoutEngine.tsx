import React from 'react';
import { View, Box } from '@styli/react';

export default () => {
  return (
    <View>
      <Box>row toLeft</Box>
      <View h-240 f-12 debugChildren row toLeft>
        <View s-100>AAA</View>
        <View s-100>BBB</View>
      </View>

      <Box>column toLeft</Box>
      <View h-240 f-12 debugChildren column toLeft>
        <View s-100>AAA</View>
        <View s-100>BBB</View>
      </View>

      <Box>row toRight</Box>
      <View h-240 f-12 debugChildren row toRight>
        <View s-100>AAA</View>
        <View s-100>BBB</View>
      </View>

      <Box>column toRight</Box>
      <View h-240 f-12 debugChildren column toRight>
        <View s-100>AAA</View>
        <View s-100>BBB</View>
      </View>

      <Box>row toTop</Box>
      <View h-240 f-12 debugChildren row toTop>
        <View s-100>AAA</View>
        <View s-100>BBB</View>
      </View>

      <Box>column toTop</Box>
      <View h-240 f-12 debugChildren column toTop>
        <View s-100>AAA</View>
        <View s-100>BBB</View>
      </View>

      <Box>row toBottom</Box>
      <View h-240 f-12 debugChildren row toBottom>
        <View s-100>AAA</View>
        <View s-100>BBB</View>
      </View>

      <Box>column toBottom</Box>
      <View h-240 f-12 debugChildren column toBottom>
        <View s-100>AAA</View>
        <View s-100>BBB</View>
      </View>

      <Box>toCenter</Box>
      <View direction="row" toCenter h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>

      <Box>row toCenterX</Box>
      <View direction="row" toCenterX h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>

      <Box>column toCenterX</Box>
      <View column toCenterX h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>

      <Box>toCenterY</Box>
      <View direction="row" toCenterY h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>

      <Box>column toCenterY</Box>
      <View column toCenterY h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>

      <Box>row toBetween</Box>
      <View row toBetween h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>

      <Box>column toBetween</Box>
      <View column toBetween h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>

      <Box>row toEvenly</Box>
      <View row toEvenly toCenterY h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>

      <Box>column toEvenly</Box>
      <View column toEvenly toCenterY h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>

      <Box>row toAround</Box>
      <View row toAround h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>

      <Box>column toAround</Box>
      <View column toAround h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>

      <Box>compose</Box>
      <View row toBottom toCenterX h-240 f-12 debugChildren>
        <View s-100>AA</View>
        <View s-100>BB</View>
      </View>
    </View>
  );
};
