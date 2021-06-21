import { Box } from '@fower/react';

export default () => {
  return (
    <Box toEvenly bgGreen50 p4>
      <Box as="input" placeholderGreen400 placeholder="your email" black p2 />

      <Box as="input" placeholderTeal200 placeholder="your email" black p2 />

      <Box
        as="input"
        placeholderPink400--T50
        placeholder="your email"
        black
        p2
      />
    </Box>
  );
};
