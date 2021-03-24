import React from 'react';
import { Box } from '@styli/react';

export default () => {
  return (
    <Box>
      <Box text3XL fontBold>
        Cursor
      </Box>

      <Box row justifyBetween>
        <Box square-100 toCenter bgBlue300 cursorPointer>
          cursorPointer
        </Box>

        <Box square-100 toCenter bgBlue300 cursorNone>
          cursorNone
        </Box>

        <Box square-100 toCenter bgBlue300 cursorHelp>
          cursorHelp
        </Box>

        <Box square-100 toCenter bgBlue300 cursorProgress>
          cursorProgress
        </Box>

        <Box square-100 toCenter bgBlue300 cursorCell>
          cursorCell
        </Box>

        <Box square-100 toCenter bgBlue300 cursorCopy>
          cursorCopy
        </Box>

        <Box square-100 toCenter bgBlue300 cursorGrab>
          cursorGrab
        </Box>

        <Box square-100 toCenter bgBlue300 cursor="alias">
          cursor=alias
        </Box>

        <Box square-100 toCenter bgBlue300 cursor="not-allowed">
          cursor="not-allowed"
        </Box>

        <Box square-100 toCenter bgBlue300 cursorNotAllowed>
          cursorNotAllowed
        </Box>

        <Box square-100 toCenter bgBlue300 cursorSResize>
          cursorSResize
        </Box>
      </Box>
    </Box>
  );
};
