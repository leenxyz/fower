import { Box } from '@styli/react';

export default () => {
  return (
    <Box toCenter h-100vh column>
      <Box text={[10, 30, 60, 90, 140]}>Lorem ipsum dolor sit amet</Box>
      <Box textBase>Lorem ipsum dolor sit amet</Box>
    </Box>
  );
};
