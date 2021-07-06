import { Box } from '@fower/react';
import { keyframes } from '@fower/core';

export default () => {
  return (
    <Box toCenter column spaceY-100>
      <Box
        text-30
        // animateSpin
        animateBounce
        // animatePing
      >
        40 Lorem ipsum dolor sit amet
      </Box>

      <Box flex square3 relative>
        <Box
          animatePing
          absolute
          inlineFlex
          w-100p
          h-100p
          roundedFull
          bgGreen400--O75
        ></Box>
        <Box
          relative
          inlineFlex
          roundedFull
          square3
          bgGreen500
          // duration-400
        ></Box>
      </Box>

      <Box square20 bgTeal400 animateSpin duration-4000></Box>
    </Box>
  );
};
