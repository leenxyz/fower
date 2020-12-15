import React from 'react';
import { View, Heading } from '@styli/react';

enum IMAGEs {
  DEFAULT_AVATAR = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607882621244&di=bbc7c4f717b902e491cddf2d21cacaf5&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg',
}

export const Background = () => {
  return (
    <View>
      <Heading f-30 fontBold>
        Background
      </Heading>

      <View f-20 bgRed50>
        BgRed50
      </View>

      <View f-20 bgRed50-T20>
        BgRed50-T20
      </View>

      <View f-20 bgRed50-T20 bgRed50-D20--hover>
        BgRed50-D20--hover
      </View>

      <View f-20 bgColor="#000-T40">
        bg #000-T40
      </View>

      <View f-20 bgColor="rgba(1,1,1,0.1)-O40">
        bgColor rgba(1,1,1,0.1)-O40
      </View>

      <View f-20 bgRed50 bgGreen50--hover>
        bgGreen50--hover
      </View>

      <View f-20 bg="green30">
        bg="green30"
      </View>

      <View f-20 bg="green30-D20">
        bg="green30-D20"
      </View>

      <View f-20 white bg="#000" bg--hover="#000.5">
        bg--hover="#000.5"
      </View>

      <View f-20 white bg="#000-L20" bg--hover="#000">
        bg--hover="#000"
      </View>

      <View
        f-20
        bgColor={['yellowgreen', 'deeppink', 'gray', 'info']}
        f={[10, 20, 30, 40]}
      >
        bgColor=['yellowgreen', 'deeppink', 'gray', 'info']
      </View>

      <View f-20 bg={['yellowgreen', 'deeppink', 'gray', 'info']}>
        bg=['yellowgreen', 'deeppink', 'gray', 'info']
      </View>

      <View
        f-10
        bg={`url(${IMAGEs.DEFAULT_AVATAR}) center 100%`}
        circle-200
        center
      >
        bg="url('https://...') center 100%"
      </View>

      <View
        f-10
        bgImg={IMAGEs.DEFAULT_AVATAR}
        bgSize="100p"
        bgPos="center"
        circle-200
        center
        column
      >
        <View>bgImg="https://..."</View>
        <View>bgSize="100p"</View>
        <View>bgPos="center"</View>
      </View>
    </View>
  );
};
