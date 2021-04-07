import { Box } from '@styli/react';
import { keyframes } from '@styli/core';
import { useState } from 'react';

const hash = keyframes({
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
console.log('hash:', hash);

export default () => {
  return (
    <Box toCenter>
      <Box
        text-30
        css={{
          animation: `${hash} 1s ease infinite`,
        }}
      >
        40 Lorem ipsum dolor sit amet
      </Box>
    </Box>
  );
};
