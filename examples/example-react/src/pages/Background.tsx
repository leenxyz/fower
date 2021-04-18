import { Box } from '@fower/react';

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

      <Box textXL bgRed500--T20>
        BgRed50--T20
      </Box>

      <Box textXL bgRed500--T20 bgRed500--D20--hover>
        BgRed500--D20--hover
      </Box>

      <Box textXL bgRed500--T30 bgRed500--D30--hover={false}>
        BgRed50--D30--hover=false
      </Box>

      <Box textXL bg="#000--T40">
        bg #000--T40
      </Box>

      <Box textXL bg="rgba(1,1,1,0.1)--O40">
        bgColor rgba(1,1,1,0.1)--O40
      </Box>

      <Box textXL bgRed500 bgGreen500--hover>
        bgGreen500--hover
      </Box>

      <Box textXL bg="green300">
        bg="green300"
      </Box>

      <Box textXL bg="green300--D20">
        bg="green300--D20"
      </Box>

      <Box textXL white--hover bg="#000--L20" bg--hover="#000">
        bg--hover="#000"
      </Box>
    </Box>
  );
};
