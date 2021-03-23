import React from 'react';
import { Box } from '@styli/react';

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
