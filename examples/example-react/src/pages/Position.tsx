import { Box } from '@styli/react';

export default () => {
  return (
    <Box>
      <Box text3XL fontBold>
        Positon
      </Box>

      <Box square-200 debugChildren position="relative">
        <Box square-100></Box>
      </Box>

      <Box square-200 debugChildren relative>
        <Box square-100 absolute right-0></Box>
      </Box>

      <Box square-200 debugChildren relative>
        <Box square-100 absolute right={0}></Box>
      </Box>

      <Box square-200 debugChildren relative>
        <Box square-100 absolute right--10></Box>
      </Box>

      <Box square-200 debugChildren relative>
        <Box square-100 absolute right={10} top-10></Box>
      </Box>
    </Box>
  );
};
