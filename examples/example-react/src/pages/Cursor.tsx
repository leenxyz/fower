import React from 'react';
import { Box } from '@styli/react';

export default () => {
  return (
    <Box>
      <Box f-30 fontBold>
        Cursor
      </Box>

      <Box row justifyBetween>
        <Box s-100 toCenter bgBlue300 cursorPointer>
          cursorPointer
        </Box>

        <Box s-100 toCenter bgBlue300 cursorNone>
          cursorNone
        </Box>

        <Box s-100 toCenter bgBlue300 cursorHelp>
          cursorHelp
        </Box>

        <Box s-100 toCenter bgBlue300 cursorProgress>
          cursorProgress
        </Box>

        <Box s-100 toCenter bgBlue300 cursorCell>
          cursorCell
        </Box>

        <Box s-100 toCenter bgBlue300 cursorCopy>
          cursorCopy
        </Box>

        <Box s-100 toCenter bgBlue300 cursorGrab>
          cursorGrab
        </Box>

        <Box s-100 toCenter bgBlue300 cursor="alias">
          cursor=alias
        </Box>

        <Box s-100 toCenter bgBlue300 cursor="not-allowed">
          cursor="not-allowed"
        </Box>

        <Box s-100 toCenter bgBlue300 cursorNotAllowed>
          cursorNotAllowed
        </Box>

        <Box s-100 toCenter bgBlue300 cursorSResize>
          cursorSResize
        </Box>
      </Box>
    </Box>
  );
};
