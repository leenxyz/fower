import React from 'react';
import { View, Box } from '@styli/react';

export default () => {
  return (
    <View>
      <Box f-30 fontBold>
        OutLine
      </Box>
      <View debug center>
        <View center s-200>
          <Box as="input" defaultValue="common input" />
        </View>
        <View center s-200>
          <Box as="input" outlineNone defaultValue="outlineNone" />
        </View>
        <View center s-200>
          <Box as="input" outlineOffset-10 defaultValue="outlineOffset-10" />
        </View>
        <View center s-200>
          <Box
            as="input"
            outline="8px ridge rgba(170, 50, 220, .6)"
            defaultValue="8px ridge rgba(170, 50, 220, .6)"
          />
        </View>
      </View>
    </View>
  );
};
