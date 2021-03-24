import React from 'react';
import { Box } from '@styli/react';

export default () => {
  return (
    <Box textBase gray60>
      <Box text3XL fontBold>
        Shadow
      </Box>

      <Box py-50 row toEvenly>
        <Box bgWhite square-128 rounded-4 toCenter shadowXS>
          shadowXS
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowSM>
          shadowSM
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowBase>
          shadowBase
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowMD>
          shadowMD
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowLG>
          shadowLG
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowXL>
          shadowXL
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowXXL>
          shadowXXL
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowInner>
          shadowInner
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowOutline>
          shadowOutline
        </Box>
      </Box>
    </Box>
  );
};
