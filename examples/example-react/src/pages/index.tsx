import { Box, injectGlobalStyle } from '@styli/react';

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

export default function IndexPage() {
  return (
    <div>
      <Box
        as="h1"
        // colorPrimary
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
      <Box as="h2" bgYellow400 p4 bgOrange400--hover>
        SubTitle
      </Box>
    </div>
  );
}
