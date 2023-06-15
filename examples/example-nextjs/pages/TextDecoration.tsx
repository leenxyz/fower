import { Box } from '@fower/react';

export default () => {
  return (
    <Box>
      <Box text-30 underline>
        40 Lorem ipsum dolor sit amet
      </Box>
      <Box text={40} lineThrough>
        40 Lorem ipsum dolor sit amet
      </Box>
      <Box textDecoration="underline">Lorem ipsum dolor sit amet</Box>
    </Box>
  );
};
