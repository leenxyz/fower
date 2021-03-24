import React from 'react';
import { Box } from '@styli/react';
import { styled } from '@styli/styled';

export default () => {
  return (
    <Box>
      <Box text3XL fontBold>
        Size
      </Box>
      <Box space-10 row w-350 wrap>
        <Box bgBlue200 square-100>
          space-10
        </Box>
        <Box bgBlue200 square-100>
          space-10
        </Box>
        <Box bgBlue200 square-100>
          space-10
        </Box>
        <Box bgBlue200 square-100>
          space-10
        </Box>
        <Box bgBlue200 square-100>
          space-10
        </Box>
        <Box bgBlue200 square-100>
          space-10
        </Box>
      </Box>

      <Box spaceX-10 row debugChildren>
        <Box bgBlue200 square-100>
          spaceX-10
        </Box>
        <Box bgBlue200 square-100>
          spaceX-10
        </Box>
        <Box bgBlue200 square-100>
          spaceX-10
        </Box>
      </Box>

      <Box spaceY-10 column debugChildren>
        <Box square-100>spaceY-10</Box>
        <Box bgBlue200 square-100>
          spaceY-10
        </Box>
        <Box bgBlue200 square-100>
          spaceY-10
        </Box>
      </Box>
    </Box>
  );
};
