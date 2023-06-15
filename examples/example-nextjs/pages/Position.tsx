import { Box } from '@fower/react';

export default () => {
  return (
    <Box>
      <Box text3XL fontBold>
        Positon
      </Box>

      <Box square-200 debug debugChildren position="relative">
        <Box square-100></Box>
      </Box>

      <Box square-200 debug debugChildren relative>
        <Box square-100 absolute right-0></Box>
      </Box>

      <Box square-200 debug debugChildren relative>
        <Box square-100 absolute right={0}></Box>
      </Box>

      <Box square-200 debug debugChildren relative>
        <Box square-100 absolute right--10></Box>
      </Box>

      <Box square-200 debug debugChildren relative>
        <Box square-100 absolute right={10} top-10></Box>
      </Box>

      <Box square-200 debug debugChildren relative>
        <Box square-100 absolute right={10} top10></Box>
      </Box>
    </Box>
  );
};
