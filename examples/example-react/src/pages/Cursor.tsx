import React from 'react';
import { View, Box } from '@styli/react';

export default () => {
  return (
    <View>
      <Box f-30 fontBold>
        Cursor
      </Box>

      <View row justifyBetween>
        <View s-100 center bgBlue30 cursorPointer>
          cursorPointer
        </View>

        <View s-100 center bgBlue30 cursorNone>
          cursorNone
        </View>

        <View s-100 center bgBlue30 cursorHelp>
          cursorHelp
        </View>

        <View s-100 center bgBlue30 cursorProgress>
          cursorProgress
        </View>

        <View s-100 center bgBlue30 cursorCell>
          cursorCell
        </View>

        <View s-100 center bgBlue30 cursorCopy>
          cursorCopy
        </View>

        <View s-100 center bgBlue30 cursorGrab>
          cursorGrab
        </View>

        <View s-100 center bgBlue30 cursor="alias">
          cursor=alias
        </View>

        <View s-100 center bgBlue30 cursor="not-allowed">
          cursor="not-allowed"
        </View>

        <View s-100 center bgBlue30 cursorNotAllowed>
          cursorNotAllowed
        </View>

        <View s-100 center bgBlue30 cursorSResize>
          cursorSResize
        </View>
      </View>
    </View>
  );
};
