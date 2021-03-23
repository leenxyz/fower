import React from 'react';
import { Box } from '@styli/react';
import { ThemeProvider } from '@styli/theming';
import { styli } from '@styli/core';

export default () => {
  return (
    <ThemeProvider theme={styli.getTheme()}>
      <Box f-30 fontBold>
        Size
      </Box>
      <Box toEvenly wrap f-12>
        <Box w9 h5 bgBlue200>
          w9 h5
        </Box>
        <Box w-100 h-50 bgBlue200>
          w-100 h-50
        </Box>
        <Box
          as="img"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607882621244&di=bbc7c4f717b902e491cddf2d21cacaf5&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg"
          s-100
        ></Box>
        <Box s-50 bgBlue200>
          s-50
        </Box>
        <Box s-50-100 bgBlue200>
          s-50-100
        </Box>
        <Box s9 bgBlue200>
          s9
        </Box>
        <Box circle-50 bgBlue200>
          circle-50
        </Box>
        <Box w-100 h-50 w-110--hover h-60--hover bgBlue200>
          w-110--hover <br /> h-60--hover
        </Box>
        <Box s-100 s-110--hover bgBlue200>
          s-110--hover
        </Box>
        <Box circle-100 circle-110--hover bgBlue200>
          circle-110--hover
        </Box>
        <Box circle={(theme) => theme.spacing?.[9]} bgBlue200>
          theme
        </Box>
        <Box h-100 maxW-50 bgYellow200>
          maxW-50
        </Box>
        <Box w-100 maxH-50 bgYellow200>
          maxH-50
        </Box>
        <Box h-100 minW-50 bgYellow200>
          minW-50
        </Box>
        <Box w-100 minH-50 bgYellow200>
          minH-50
        </Box>
        <Box s={[50, 100, 200, 300]} bgBlue200>
          responsive
        </Box>
      </Box>
      <Box toEvenly wrap>
        <Box w={[1 / 3, '100%', 400]} h-100 bgRed200></Box>
        <Box w={[1 / 3, '100%', 400]} h-100 bgGreen200></Box>
        <Box w={[1 / 3, '100%', 400]} h-100 bgYellow200></Box>
      </Box>
    </ThemeProvider>
  );
};
