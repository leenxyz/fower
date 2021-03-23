import React from 'react';
import { Box, Text } from '@styli/react';

export default () => {
  return (
    <Box>
      <Box>CSS Prop</Box>

      <Text
        f-40
        red500
        css={{
          textShadow: '1px 0 5px #FC0',
          textDecoration: 'underline',
        }}
      >
        Hi, Styli!
      </Text>

      <Box
        f-40
        css={{
          backgroundColor: '#edf2f7',
          ':hover': {
            backgroundColor: '#feebc8',
          },
          '.title': {
            fontWeight: 'bold',
          },
          span: {
            color: 'deeppink',
          },
        }}
      >
        <div className="title">Nested demo</div>
        <span>Hi, Styli!</span>
      </Box>
    </Box>
  );
};
