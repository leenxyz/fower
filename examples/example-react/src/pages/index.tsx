import { Box, injectGlobalStyle } from '@styli/react';
import { setTheme, styli } from '@styli/core';
import { ThemeProvider, useColorMode } from '@styli/theming';

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
    sm: '',
    '4xl': '',
  },
  modes: {
    dark: {
      colors: {
        red500: '#666',
      },
    },
  },
});

export default function IndexPage() {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <ThemeProvider theme={styli.config.theme!}>
      <div>
        {/* <Box
          as="button"
          onClick={() => {
            setColorMode(colorMode === 'default' ? 'dark' : 'default');
          }}
        >
          切换 {colorMode}
        </Box> */}

        {/* <Box
          // style={{ backgroundColor: 'yellowgreen' }}
          red500
          bgAmber100
          bgRed100--hover
          p={[10, 40, 80, 120, 200]}
          // p6--hover
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
          m10
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
          <Box className="child">Child</Box>
        </Box>
      </div>
    </ThemeProvider>
  );
}
