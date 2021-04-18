import { Box } from '@fower/react';

export default () => {
  return (
    <Box textBase gray600>
      <Box text3XL fontBold>
        Shadow
      </Box>

      <Box py-50 row toEvenly>
        <Box bgWhite square-128 rounded-4 toCenter shadowSM>
          shadowSM
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadow>
          Base
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

        <Box bgWhite square-128 rounded-4 toCenter shadow2XL>
          shadow2XL
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowInner>
          shadowInner
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowOutline>
          shadowOutline
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowOutline>
          shadowOutline
        </Box>
      </Box>
    </Box>
  );
};
