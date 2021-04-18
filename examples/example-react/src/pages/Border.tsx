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
        <Box toCenter p4 bgOrange200 borderT-2 borderOrange500>
          borderT-2
        </Box>
        <Box toCenter p4 bgOrange200 borderR-2 borderOrange500>
          borderR-2
        </Box>
        <Box toCenter p4 bgOrange200 borderB-2 borderOrange500>
          borderB-2
        </Box>
        <Box toCenter p4 bgOrange200 borderL-2 borderOrange500>
          borderL-2
        </Box>
      </Box>

      <Box toEvenly mb6 bgGray100>
        <Box toCenter p4 bgOrange200 border-4 borderOrange500 borderSolid>
          borderSolid
        </Box>
        <Box toCenter p4 bgOrange200 borderT-4 borderOrange500 borderDashed>
          borderDashed
        </Box>
        <Box toCenter p4 bgOrange200 borderR-4 borderOrange500 borderDotted>
          borderDotted
        </Box>
        <Box toCenter p4 bgOrange200 borderB-4 borderOrange500 borderDouble>
          borderDouble
        </Box>
        <Box toCenter p4 bgOrange200 border-4 borderOrange500 borderNone>
          borderNone
        </Box>
      </Box>

      <Box toEvenly mb6 bgGray100>
        <Box toCenter p4 border-2 borderPurple500>
          borderPurple500
        </Box>
        <Box toCenter p4 border-2 borderTeal500>
          borderTeal500
        </Box>
        <Box toCenter p4 border-2 borderCyan500>
          borderCyan500
        </Box>
        <Box toCenter p4 border-2 borderAmber500>
          borderAmber500
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
        <Box toCenter p4 border-2 borderAmber500--T80>
          borderAmber500--T80
        </Box>
      </Box>
    </Box>
  );
};
