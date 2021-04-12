import { Box } from '@styli/react';
import { setTheme } from '@styli/core';
import { useState } from 'react';

setTheme({
  // modePrefix: 'tw-',
  modes: [
    'red', // red mode
    'blue', // red mode
    'large', // large text mode
  ],
});

export default () => {
  const [mode, setMode] = useState('Light');
  function toggleMode() {
    if (mode === 'Dark') {
      setMode('Light');
      document.documentElement.classList.remove('dark');
    } else {
      setMode('Dark');
      document.documentElement.classList.add('dark');
    }
  }
  return (
    <Box h-400 roundedLG bgGray800--dark bgAmber100 p4>
      <Box column toCenter spaceY3 gray800 white--dark textCenter>
        <Box
          as="button"
          onClick={toggleMode}
          p3
          cursorPointer
          outlineNone
          roundedFull
          rounded-0--dark
          white
          bgBlack
          black--dark
          bgWhite--dark
        >
          Toggle {mode}
        </Box>
        <Box text3XL textSM--dark>
          Powerful Theme Mode
        </Box>
        <Box textSM text3XL--dark>
          Not only color mode, theme mode any thing: size, padding, margin,
          rounded...
        </Box>
      </Box>
    </Box>
  );
};
