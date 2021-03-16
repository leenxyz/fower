import React from 'react';
import { View, Box } from '@styli/react';

export default () => {
  return (
    <View>
      <Box>basic box</Box>
      <Box as="span" p2 orange400>
        Span1
      </Box>
      <Box as="span" green400 border>
        Span2
      </Box>
      <Box as="input" outlineNone border p2 block></Box>
      <Box as="a" red400 href="https://google.com" target="_blank">
        Google
      </Box>
    </View>
  );
};
