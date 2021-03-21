import React from 'react';
import { View, Box } from '@styli/react';

export default () => {
  return (
    <View>
      <Box>Border</Box>

      <View toEvenly mb6 bgGray100>
        <View toCenter p4 bgOrange200 border-0 borderOrange500>
          border-0
        </View>
        <View toCenter p4 bgOrange200 border borderOrange500>
          border
        </View>
        <View toCenter p4 bgOrange200 border-2 borderOrange500>
          border-2
        </View>
        <View toCenter p4 bgOrange200 border-4 borderOrange500>
          border-4
        </View>
        <View toCenter p4 bgOrange200 border-8 borderOrange500>
          border-8
        </View>
      </View>

      <View toEvenly mb6 bgGray100>
        <View toCenter p4 bgOrange200 borderT-2 borderOrange500>
          borderT-2
        </View>
        <View toCenter p4 bgOrange200 borderR-2 borderOrange500>
          borderR-2
        </View>
        <View toCenter p4 bgOrange200 borderB-2 borderOrange500>
          borderB-2
        </View>
        <View toCenter p4 bgOrange200 borderL-2 borderOrange500>
          borderL-2
        </View>
      </View>

      <View toEvenly mb6 bgGray100>
        <View toCenter p4 bgOrange200 border-4 borderOrange500 borderSolid>
          borderSolid
        </View>
        <View toCenter p4 bgOrange200 borderT-4 borderOrange500 borderDashed>
          borderDashed
        </View>
        <View toCenter p4 bgOrange200 borderR-4 borderOrange500 borderDotted>
          borderDotted
        </View>
        <View toCenter p4 bgOrange200 borderB-4 borderOrange500 borderDouble>
          borderDouble
        </View>
        <View toCenter p4 bgOrange200 border-4 borderOrange500 borderNone>
          borderNone
        </View>
      </View>

      <View toEvenly mb6 bgGray100>
        <View toCenter p4 border-2 borderPurple500>
          borderPurple500
        </View>
        <View toCenter p4 border-2 borderTeal500>
          borderTeal500
        </View>
        <View toCenter p4 border-2 borderCyan500>
          borderCyan500
        </View>
        <View toCenter p4 border-2 borderAmber500>
          borderAmber500
        </View>
      </View>

      <View toEvenly mb6 bgGray100>
        <View toCenter p4 border-2 borderPurple500-T20>
          borderPurple500-T40
        </View>
        <View toCenter p4 border-2 borderTeal500-T40>
          borderTeal500-T60
        </View>
        <View toCenter p4 border-2 borderCyan500-T60>
          borderCyan500
        </View>
        <View toCenter p4 border-2 borderAmber500-T80>
          borderAmber500-T80
        </View>
      </View>
    </View>
  );
};
