import { Box } from '@fower/react';

export default () => {
  return (
    <Box>
      <Box>Border</Box>

      <Box toEvenly mb6 bgGray100>
        <Box toCenter p4 bgOrange200 border-0 borderOrange500>
          border-0
        </Box>
        <Box toCenter p4 bgOrange200 border borderOrange500>
          border
        </Box>
        <Box toCenter p4 bgOrange200 border-2 borderOrange500>
          border-2
        </Box>
        <Box toCenter p4 bgOrange200 border-4 borderOrange500>
          border-4
        </Box>
        <Box toCenter p4 bgOrange200 border-8 borderOrange500>
          border-8
        </Box>
      </Box>

      <Box toEvenly mb6 bgGray100>
        <Box toCenter p4 bgOrange200 borderTop borderOrange500>
          borderTop
        </Box>
        <Box toCenter p4 bgOrange200 borderTop-2 borderOrange500>
          borderTop-2
        </Box>
        <Box toCenter p4 bgOrange200 borderRight-2 borderOrange500>
          borderRight-2
        </Box>
        <Box toCenter p4 bgOrange200 borderBottom-2 borderOrange500>
          borderBottom-2
        </Box>
        <Box toCenter p4 bgOrange200 borderLeft-2 borderOrange500>
          borderLeft-2
        </Box>
      </Box>

      <Box toEvenly mb6 bgGray100>
        <Box toCenter p4 bgOrange200 border-4 borderOrange500 borderSolid>
          borderSolid
        </Box>
        <Box toCenter p4 bgOrange200 borderTop-4 borderOrange500 borderDashed>
          borderDashed
        </Box>
        <Box toCenter p4 bgOrange200 borderRight-4 borderOrange500 borderDotted>
          borderDotted
        </Box>
        <Box
          toCenter
          p4
          bgOrange200
          borderBottom-4
          borderOrange500
          borderDouble
        >
          borderDouble
        </Box>
        <Box toCenter p4 bgOrange200 border-4 borderOrange500 borderNone>
          borderNone
        </Box>
      </Box>

      <Box toEvenly mb6 bgGray100>
        <Box toCenter p4 border-2 borderColor="red400">
          borderColor
        </Box>
        <Box toCenter p4 border-2 borderPurple500>
          borderPurple500
        </Box>
        <Box toCenter p4 border-2 borderTeal500>
          borderTeal500
        </Box>
        <Box toCenter p4 border-2 borderCyan500>
          borderCyan500
        </Box>
        <Box toCenter p4 border-2 borderOrange500>
          borderOrange500
        </Box>
      </Box>

      <Box toEvenly mb6 bgGray100>
        <Box toCenter p4 border-2 borderPurple500--T20>
          borderPurple500--T40
        </Box>
        <Box toCenter p4 border-2 borderTeal500--T40>
          borderTeal500--T60
        </Box>
        <Box toCenter p4 border-2 borderCyan500--T60>
          borderCyan500--T60
        </Box>
        <Box toCenter p4 border-2 borderOrange500--T80>
          borderOrange500--T80
        </Box>
      </Box>
    </Box>
  );
};
