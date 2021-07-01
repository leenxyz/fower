import { Box } from '@fower/react';
import { setTheme } from '@fower/core';
import { useState } from 'react';

setTheme({
  mode: {
    classPrefix: 'fower-',
    modeList: [
      'red', // red mode
      'blue', // red mode
      'large', // large text mode
    ],
  },
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
    <Box h-400 roundedLarge bgGray800--dark bgOrange100 p4>
      <Box _dark={['green200']} red200>
        40 Lorem ipsum dolor sit amet
      </Box>
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
