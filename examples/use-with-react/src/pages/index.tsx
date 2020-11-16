import React from 'react';
import { View } from '@styli/react';

export default () => {
  return (
    <View p6 f={t => t.fontSizes[1]} bgGreen20 w={[200, 400, 600]}>
      Use styli with custom component
    </View>
  );
};
