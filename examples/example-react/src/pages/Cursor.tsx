import React from 'react';
import { View, Box } from '@styli/react';

export default () => {
  return (
    <View>
      <Box f-30 fontBold>
        Cursor
      </Box>

      <View row justifyBetween>
        <View s-100 toCenter bgBlue300 cursorPointer>
          cursorPointer
        </View>

        <View s-100 toCenter bgBlue300 cursorNone>
          cursorNone
        </View>

        <View s-100 toCenter bgBlue300 cursorHelp>
          cursorHelp
        </View>

        <View s-100 toCenter bgBlue300 cursorProgress>
          cursorProgress
        </View>

        <View s-100 toCenter bgBlue300 cursorCell>
          cursorCell
        </View>

        <View s-100 toCenter bgBlue300 cursorCopy>
          cursorCopy
        </View>

        <View s-100 toCenter bgBlue300 cursorGrab>
          cursorGrab
        </View>

        <View s-100 toCenter bgBlue300 cursor="alias">
          cursor=alias
        </View>

        <View s-100 toCenter bgBlue300 cursor="not-allowed">
          cursor="not-allowed"
        </View>

        <View s-100 toCenter bgBlue300 cursorNotAllowed>
          cursorNotAllowed
        </View>

        <View s-100 toCenter bgBlue300 cursorSResize>
          cursorSResize
        </View>
      </View>
    </View>
  );
};
