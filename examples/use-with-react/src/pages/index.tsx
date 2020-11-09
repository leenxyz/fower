import React from 'react';
import preset from '@styli/preset-default';
import { styli } from '@styli/core';
import { View } from '@styli/react';

styli.setup(preset);

export default () => {
  return (
    <View p6 f={t => t.fontSizes[1]} bgGreen20>
      Use styli with custom component
    </View>
  );
};
