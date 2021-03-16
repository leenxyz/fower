import React from 'react';
import { View, Box, Text } from '@styli/react';

export default () => {
  return (
    <View>
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

      <View
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
      </View>
    </View>
  );
};
