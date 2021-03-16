import React from 'react';
import { View, Box } from '@styli/react';

export default () => {
  return (
    <View f-16 gray60>
      <Box f-30 fontBold>
        Shadow
      </Box>

      <View py-50 row toEvenly>
        <View bgWhite s-128 rounded-4 toCenter shadowXS>
          shadowXS
        </View>

        <View bgWhite s-128 rounded-4 toCenter shadowSM>
          shadowSM
        </View>

        <View bgWhite s-128 rounded-4 toCenter shadowBase>
          shadowBase
        </View>

        <View bgWhite s-128 rounded-4 toCenter shadowMD>
          shadowMD
        </View>

        <View bgWhite s-128 rounded-4 toCenter shadowLG>
          shadowLG
        </View>

        <View bgWhite s-128 rounded-4 toCenter shadowXL>
          shadowXL
        </View>

        <View bgWhite s-128 rounded-4 toCenter shadowXXL>
          shadowXXL
        </View>

        <View bgWhite s-128 rounded-4 toCenter shadowInner>
          shadowInner
        </View>

        <View bgWhite s-128 rounded-4 toCenter shadowOutline>
          shadowOutline
        </View>
      </View>
    </View>
  );
};
