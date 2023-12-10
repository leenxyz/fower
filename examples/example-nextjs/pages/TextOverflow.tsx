import { Box } from '@fower/react';

export default () => {
  return (
    <Box gap2>
      <Box w-200 textLG truncate>
        Lorem ipsum dolor sit amet
      </Box>
      <Box w-200 textXL overflowEllipsis bgRed100 overflowHidden>
        Lorem ipsum dolorrrrrrrrrrrrrrrrrrrrrrrrrr sit amet
      </Box>
      <Box w-200 text2XL overflowClip bgRed100 overflowHidden>
        Lorem ipsum dolorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr sit amet
      </Box>
    </Box>
  );
};
