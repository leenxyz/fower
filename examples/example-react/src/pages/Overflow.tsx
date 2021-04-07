import { Box } from '@styli/react';

export default () => {
  return (
    <Box>
      <Box text3XL fontBold as="h1">
        OutLine
      </Box>
      <Box debug overflowHidden>
        overflow
      </Box>

      <Box debug overflowXAuto>
        overflowXAuto
      </Box>

      <Box debug overflowX="visible">
        overflow
      </Box>
    </Box>
  );
};
