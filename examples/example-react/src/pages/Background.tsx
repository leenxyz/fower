import React from 'react';
import { Box } from '@styli/react';

enum IMAGEs {
  DEFAULT_AVATAR = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607882621244&di=bbc7c4f717b902e491cddf2d21cacaf5&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg',
}

export default () => {
  return (
    <Box>
      <Box text3XL fontBold>
        Background
      </Box>

      <Box textXL bgLime400>
        bgLime400
      </Box>

      <Box textXL bgRed500>
        BgRed50
      </Box>

      <Box textXL bgRed500-T20>
        BgRed50-T20
      </Box>

      <Box textXL bgRed500-T20 bgRed500-D20--hover>
        BgRed50-D20--hover
      </Box>

      <Box textXL bgRed500-T30 bgRed500-D30--hover={false}>
        BgRed50-D30--hover=false
      </Box>

      <Box textXL bg="#000-T40">
        bg #000-T40
      </Box>

      <Box textXL bg="rgba(1,1,1,0.1)-O40">
        bgColor rgba(1,1,1,0.1)-O40
      </Box>

      <Box textXL bgRed500 bgGreen50--hover>
        bgGreen50--hover
      </Box>

      <Box textXL bg="green300">
        bg="green30"
      </Box>

      <Box textXL bg="green300-D20">
        bg="green30-D20"
      </Box>

      <Box textXL white bg="#000-L20" bg--hover="#000">
        bg--hover="#000"
      </Box>

      <Box
        textXL
        bg={['yellowgreen', 'deeppink', 'gray', 'info']}
        f={[10, 20, 30, 40]}
      >
        bg=['yellowgreen', 'deeppink', 'gray', 'info']
      </Box>

      <Box textXL bg={['yellowgreen', 'deeppink', 'gray', 'info']}>
        bg=['yellowgreen', 'deeppink', 'gray', 'info']
      </Box>

      <Box
        bg={`url("${IMAGEs.DEFAULT_AVATAR}") center 100%`}
        circle-200
        toCenter
      >
        bg="url('https://...') center 100%"
      </Box>

      <Box text-10 circle-200 toCenter column>
        <Box>bgImg="https://..."</Box>
        <Box>bgSize="100p"</Box>
        <Box>bgPos="center"</Box>
      </Box>
    </Box>
  );
};
