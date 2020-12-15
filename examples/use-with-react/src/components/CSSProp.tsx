import React from 'react';
import { View, Heading, Text } from '@styli/react';

export const CSSProp = () => {
  return (
    <View>
      <Heading>CSS Prop</Heading>

      <Text
        f-40
        red50
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
