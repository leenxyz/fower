import { Box, injectGlobalStyle } from '@styli/react';

injectGlobalStyle({
  '*': {},
  body: {
    margin: '0',
    backgroundColor: 'red',
    ':hover': {
      backgroundColor: 'green',
    },
  },
  div: {
    backgroundColor: 'yellow',
    ':hover': {
      backgroundColor: 'blue',
    },
  },
});

export default function IndexPage() {
  return (
    <div>
      <Box as="h1" colorPrimary>
        Page index
      </Box>
      <Box as="h2" bgYellow400 p4>
        SubTitle
      </Box>
    </div>
  );
}
