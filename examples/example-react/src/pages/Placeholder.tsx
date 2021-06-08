import { Box } from '@fower/react';

export default () => {
  return (
    <Box toEvenly bgGreen50 p4>
      <Box
        as="input"
        placeholder="Everything will be OK"
        black
        p2
        css={{
          '::placeholder': {
            color: 'red400',
          },
        }}
      />

      <Box
        as="input"
        placeholderGreen400
        placeholder="Everything will be OK"
        black
        p2
      />

      <Box
        as="input"
        placeholderTeal200
        placeholder="Everything will be OK"
        black
        p2
      />

      <Box
        as="input"
        placeholderPink400--T50
        placeholder="Everything will be OK"
        black
        p2
      />
    </Box>
  );
};
