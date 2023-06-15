import { Box } from '@fower/react';

export default () => {
  return (
    <Box>
      <Box breakNormal>Lorem ipsum dolor sit amet</Box>
      <Box w-200 breakWords>
        Lorem ipsum dolor sit amet
      </Box>
      <Box w-200 breakAll>
        Lorem ipsum dolor sit amet
      </Box>
    </Box>
  );
};
