import { Box, injectGlobalStyle } from '@styli/react';
import { setTheme, styli } from '@styli/core';

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
});

console.log('---styli.', styli.getConfig());

export default function IndexPage() {
  return (
    <div>
      <Box
        as="h1"
        css={{
          border: '1px solid red',
          fontSize: '40px',
          background: '#888',
          ':hover': {
            backgroundColor: 'orange',
          },
        }}
      >
        Page index
      </Box>
      <Box color="rose600">gogo</Box>
      <Box as="h2" bgBlue100 p4 color="colorHello">
        gogo
      </Box>
      <Box as="h2" bgYellow400 p4 bgOrange400--hover>
        SubTitle
      </Box>
    </div>
  );
}
