import { Box } from '@fower/react';
import { useState } from 'react';
import { Button } from './Button';

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
  const p = {
    'bg--hover': `green300`,
  };
  return (
    <Box
      as="button"
      onClick={toggleMode}
      fontBold
      // p3
      // cursorPointer
      // outlineNone
      // white
      // bgBlack
      // bgGreen200--hover
      // // bgGreen600--dark--hover
      // // bg--hover
      // bgGreen300--dark
    >
      Toggle {mode}
      <Box white>FOo</Box>
      <Box white>VBar</Box>
    </Box>
  );

  return (
    <Box h-400 roundedLG bgGray200 p4>
      <Box red600>40 Lorem ipsum dolor sit amet</Box>
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
        <Box gray700 text3XL bgBlue300 p4 rounded2XL rounded--dark>
          Powerful Theme Mode
        </Box>
        <Box textSM>
          Not only color mode, theme mode any thing: size, padding, margin,
          rounded...
        </Box>
      </Box>
    </Box>
  );
};
