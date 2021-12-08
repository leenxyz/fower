import { Box } from '@fower/react';
import { setConfig } from '@fower/core';
import { useState } from 'react';

setConfig({
  mode: {
    autoDarkMode: {
      enabled: true,
    },
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
  // return (
  //   <Box border-4 borderGray200--T4 m3 p4 bgRed200>
  //     Not only color mode, theme mode any thing: size, padding, margin,
  //     rounded...
  //   </Box>
  // );

  return (
    <Box h-400 roundedLarge bgGray100--L2 p4>
      {/* <Box red600>40 Lorem ipsum dolor sit amet</Box> */}
      <Box column toCenter spaceY3 gray800 textCenter>
        <Box
          as="button"
          onClick={toggleMode}
          p3
          cursorPointer
          outlineNone
          white
          bgBlack
          bgGreen200--hover
          // bgGreen600--dark--hover
          // bg--hover
          bgGreen300--dark
        >
          Toggle {mode}
        </Box>
        {/* <Box gray700 text3XL bgBlue300 p4 roundedGigantic rounded--dark>
          Powerful Theme Mode
        </Box> */}
        <Box textSM border p4 borderGray300--T4>
          Not only color mode, theme mode any thing: size, padding, margin,
          rounded...
        </Box>
      </Box>
    </Box>
  );
};
