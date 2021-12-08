import { Box, useMode } from '@fower/react';
import { setConfig, store } from '@fower/core';
import { useState } from 'react';

setConfig({
  mode: {
    autoDarkMode: {
      enabled: true,
      // enabled: false,
      mappings: {
        // white: 'gray800',
        // white: '#111826',
        // white: false,
        red300: '#fc0',
        red100: 'green600',
      },
    },
    modeList: [
      'red', // red mode
      'blue', // red mode
      'large', // large text mode
    ],
  },
});

export default () => {
  const { mode, setMode } = useMode();
  return (
    <Box h-400 roundedLarge p4 column toCenter spaceY3 bgWhite>
      <Box
        as="button"
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        cursorPointer
        bgGreen100
        px4
        py2
        rounded
        green800
      >
        Toggle
      </Box>
      <Box text2XL gray800 bgRed100>
        Auto Dark Mode
      </Box>
      <Box text2XL black red400--red blue400--blue text6XL--large>
        Multiple theme mode
      </Box>
      <Box toCenter spaceX2 black>
        <Box as="label" toCenter>
          <input
            type="radio"
            name="mode"
            defaultChecked={mode === 'light'}
            onClick={() => setMode('light')}
          />
          Default
        </Box>
        <Box as="label" toCenter>
          <input type="radio" name="mode" onClick={() => setMode('red')} />
          Red
        </Box>
        <Box as="label" toCenter>
          <input type="radio" name="mode" onClick={() => setMode('blue')} />
          Blue
        </Box>
        <Box as="label" toCenter>
          <input type="radio" name="mode" onClick={() => setMode('large')} />
          Large text
        </Box>
      </Box>
    </Box>
  );
};
