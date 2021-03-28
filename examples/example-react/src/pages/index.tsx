import { Box, injectGlobalStyle } from '@styli/react';
import { setTheme, styli } from '@styli/core';
import { useState } from 'react';

// injectGlobalStyle({
//   '*': {},
//   body: {
//     margin: '0',
//     backgroundColor: 'red',
//     ':hover': {
//       backgroundColor: 'green',
//     },
//   },
//   div: {
//     backgroundColor: 'yellow',
//     ':hover': {
//       backgroundColor: 'blue',
//     },
//   },

// });

setTheme({
  colors: {
    colorHello: '#ff9900',
  },
  breakpoints: {
    '4xl': '',
  },
});

export default function IndexPage() {
  const [colorMode, setColorMode] = useState('default');
  return (
    <div>
      <Box
        as="button"
        onClick={() => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
          if (colorMode === 'default') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }}
      >
        切换 {colorMode}
      </Box>

      {/* <Box
          red500
          bgAmber100
          bgRed100--hover
          p={[10, 40, 80, 120, 200]}
          p6--hover
        >
          gogo
        </Box> */}

      {/* <Box as="h2" red500 p4 bgYellow100 bgAmber100-D10--hover>
          gogo
        </Box> */}

      {/* <Box as="h2" red500 p4 color="colorHello">
          gogo
        </Box> */}
      <Box
        as="h2"
        rounded3XL
        // roundedSM--hover
        pt1
        pb1
        m10
        gray400--hover
        blue400--dark
        css={{
          backgroundColor: 'bisque',
          // padding: 20,
          padding: '20px',
          ':hover': {
            backgroundColor: 'yellow',
          },
          '.child': {
            color: 'white',
          },
        }}
      >
        SubTitle
        <Box pt1 pb1 m10 teal400 className="child" bgBlue200--hover>
          Child
        </Box>
      </Box>
    </div>
  );
}
