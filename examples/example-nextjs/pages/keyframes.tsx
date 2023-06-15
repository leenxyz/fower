import { Box } from '@fower/react';
import { keyframes } from '@fower/core';

export default () => {
  const bounce = keyframes({
    'from, 20%, 53%, 80%, to': {
      transform: 'translate3d(0,0,0)',
      padding: 10,
    },

    '40%, 43%': {
      transform: 'translate3d(0, -30px, 0)',
    },

    '70%': {
      transform: 'translate3d(0, -15px, 0)',
    },

    '90%': {
      transform: 'translate3d(0,-4px,0)',
    },
  });
  return (
    <Box toCenter>
      <Box
        text-30
        css={{
          animation: `${bounce} 1s ease infinite`,
        }}
      >
        40 Lorem ipsum dolor sit amet
      </Box>
    </Box>
  );
};
