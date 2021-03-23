import React from 'react';
import { Box } from '@styli/react';

export default () => {
  return (
    <Box>
      <Box text3XL fontBold>
        Positon
      </Box>

      <Box s-200 debugChildren position="relative">
        <Box s-100></Box>
      </Box>

      <Box s-200 debugChildren relative>
        <Box s-100 absolute right-0></Box>
      </Box>

      <Box s-200 debugChildren relative>
        <Box s-100 absolute right={0}></Box>
      </Box>

      <Box s-200 debugChildren relative>
        <Box s-100 absolute right--10></Box>
      </Box>

      <Box s-200 debugChildren relative>
        <Box s-100 absolute right={10} top-10></Box>
      </Box>
    </Box>
  );
};
