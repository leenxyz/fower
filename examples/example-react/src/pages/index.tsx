import { Box, injectGlobalStyle } from '@styli/react';
import { setTheme, styli } from '@styli/core';
import { useState } from 'react';
import { styled } from '@styli/styled';

const Button = styled('button');

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
    colorBrand: 'pink',
  },
  breakpoints: {
    '4xl': '',
  },
});

styli.registerAtomicProps('textBody', (atom) => {
  atom.style = { fontSize: 40 };
  return atom;
});

styli.registerColorProps({
  info: '#ff0',
});

declare module '@styli/types' {
  export interface AtomicProps {
    textBody?: boolean;
    info?: boolean;
    bgInfo?: boolean;
    borderInfo?: boolean;
  }
}

export default function IndexPage() {
  const [colorMode, setColorMode] = useState('default');
  return (
    <Box textBody info border borderInfo>
      test Text
    </Box>
  );
  return (
    <div>
      <Box textBody red300 green300--i--hover toCenter>
        test TExt
      </Box>
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

      {/* <Box red500 bgAmber100 bgRed100--hover p-10 p-40--sm p-60--md p6--hover>
        gogo
      </Box> */}

      <Box as="h2" spaceX4 row debugChildren>
        <Box>BB</Box>
        <Box>BB</Box>
        <Box>BB</Box>
        <Box>BB</Box>
        <Box>BB</Box>
      </Box>

      {/* <Box as="h2" red500 p4 color="colorHello">
          gogo
        </Box> */}
      {/* <Box
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
            ':hover': {
              color: '#ddd',
            },
            '.two': {
              color: 'red',
              ':hover': {
                color: '#999',
              },
            },
          },
        }}
      >
        SubTitle
        <Box pt1 pb1 m10 className="child">
          Child
          <Box className="two">two</Box>
        </Box>
      </Box> */}
    </div>
  );
}
