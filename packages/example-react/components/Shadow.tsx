import React from 'react'
import { View, Box } from '@styli/react'

export const Shadow = () => {
  return (
    <View f-16 gray60>
      <Box f-30 fontBold>
        Shadow
      </Box>

      <View py-50 row evenly>
        <View bgWhite s-128 rounded-4 center shadowXS>
          shadowXS
        </View>

        <View bgWhite s-128 rounded-4 center shadowSM>
          shadowSM
        </View>

        <View bgWhite s-128 rounded-4 center shadowBase>
          shadowBase
        </View>

        <View bgWhite s-128 rounded-4 center shadowMD>
          shadowMD
        </View>

        <View bgWhite s-128 rounded-4 center shadowLG>
          shadowLG
        </View>

        <View bgWhite s-128 rounded-4 center shadowXL>
          shadowXL
        </View>

        <View bgWhite s-128 rounded-4 center shadowXXL>
          shadowXXL
        </View>

        <View bgWhite s-128 rounded-4 center shadowInner>
          shadowInner
        </View>

        <View bgWhite s-128 rounded-4 center shadowOutline>
          shadowOutline
        </View>
      </View>
    </View>
  )
}
