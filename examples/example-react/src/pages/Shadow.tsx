import { Box } from '@fower/react';

export default () => {
  return (
    <Box textBase gray600>
      <Box text3XL fontBold>
        Shadow
      </Box>

      <Box py-50 row toEvenly flexWrap>
        <Box bgWhite square-128 rounded-4 toCenter shadowTiny>
          shadowTiny
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadow>
          Base
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowMedium>
          shadowMedium
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowLarge>
          shadowLarge
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowHuge>
          shadowHuge
        </Box>

        <Box bgWhite square-128 rounded-4 toCenter shadowGigantic>
          shadowGigantic
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
