import React from 'react';
import { View } from '@styli/react';

export const FontWeight = () => {
  return (
    <View>
      <View f-28>
        <View fontHairline>Lorem ipsum dolor sit amet</View>
        <View fontThin>Lorem ipsum dolor sit amet</View>
        <View fontLight>Lorem ipsum dolor sit amet</View>
        <View fontNormal>Lorem ipsum dolor sit amet</View>
        <View fontMedium>Lorem ipsum dolor sit amet</View>
        <View fontSemibold>Lorem ipsum dolor sit amet</View>
        <View fontBold>Lorem ipsum dolor sit amet</View>
        <View fontExtrabold>Lorem ipsum dolor sit amet</View>
      </View>

      <View f-24>
        <View fontWeight-100>Lorem ipsum dolor sit amet</View>
        <View fontWeight-400>Lorem ipsum dolor sit amet</View>
        <View fontWeight={600}>Lorem ipsum dolor sit amet</View>
      </View>
    </View>
  );
};
