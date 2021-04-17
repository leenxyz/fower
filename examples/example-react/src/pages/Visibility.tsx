import { Box } from '@styli/react';

export default () => {
  return (
    <Box>
      <Box visibility="hidden">visible</Box>
      <Box visible>visible</Box>
      <Box invisible>hidden</Box>
    </Box>
  );
};
