import { Box } from '@fower/react';

export default () => {
  return (
    <Box>
      <Box w-200 textLG truncate>
        Lorem ipsum dolor sit amet
      </Box>
      <Box w-200 textXL overflowEllipsis>
        Lorem ipsum dolor sit amet
      </Box>
      <Box w-200 text2XL overflowClip>
        Lorem ipsum dolor sit amet
      </Box>
    </Box>
  );
};
