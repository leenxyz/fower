import { Box } from '@fower/react';

export default () => {
  return (
    <Box>
      <Box text3XL fontBold>
        Size
      </Box>
      <Box space-10 row w-350 flexWrap="wrap" bgRed100>
        <Box bgBlue200 square-100 flexShrink-0>
          space-10
        </Box>
        <Box bgBlue200 square-100 flexShrink-0>
          space-10
        </Box>
        <Box bgBlue200 square-100 flexShrink-0>
          space-10
        </Box>
        <Box bgBlue200 square-100 flexShrink-0>
          space-10
        </Box>
        <Box bgBlue200 square-100 flexShrink-0>
          space-10
        </Box>
        <Box bgBlue200 square-100 flexShrink-0>
          space-10
        </Box>
        <Box bgBlue200 square-100 flexShrink-0>
          space-10
        </Box>

        <Box bgBlue200 square-100 flexShrink-0>
          space-10
        </Box>
        <Box bgBlue200 square-100 flexShrink-0>
          space-10
        </Box>
      </Box>

      <Box gap-10 row debugChildren>
        <Box bgBlue200 square-100>
          gap-10
        </Box>
        <Box bgBlue200 square-100>
          gap-10
        </Box>
        <Box bgBlue200 square-100>
          gap-10
        </Box>
      </Box>

      <Box gap-10 column debugChildren>
        <Box square-100>gap-10</Box>
        <Box bgBlue200 square-100>
          gap-10
        </Box>
        <Box bgBlue200 square-100>
          gap-10
        </Box>
      </Box>
    </Box>
  );
};
