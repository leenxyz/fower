import React from 'react';
import { View, Box } from '@styli/react';

export default () => {
  return (
    <View>
      <Box f-30 fontBold>
        Positon
      </Box>

      <View s-200 debugChildren relative>
        <View s-100></View>
      </View>

      <View s-200 debugChildren relative>
        <View s-100 absolute right-0></View>
      </View>

      <View s-200 debugChildren relative>
        <View s-100 absolute right={0}></View>
      </View>

      <View s-200 debugChildren relative>
        <View s-100 absolute right--10></View>
      </View>

      <View s-200 debugChildren relative>
        <View s-100 absolute right={10} top-10></View>
      </View>
    </View>
  );
};
