import React from 'react'
import { View, Heading } from '@styli/react'

export const Size = () => {
  return (
    <View>
      <Heading f-30 fontBold>
        Size
      </Heading>
      <View evenly wrap f-12>
        <View w9 h5 bgBlue20>
          w9 h5
        </View>

        <View w-100 h-50 bgBlue20>
          w-100 h-50
        </View>

        <View s-50 bgBlue20>
          s-50
        </View>

        <View s9 bgBlue20>
          s9
        </View>

        <View c-50 bgBlue20>
          c-50
        </View>

        <View w-100 h-50 w-110--hover h-60--hover bgBlue20>
          w-110--hover <br /> h-60--hover
        </View>

        <View s-100 s-110--hover bgBlue20>
          s-110--hover
        </View>

        <View c-100 c-110--hover bgBlue20>
          c-110--hover
        </View>

        <View c={(theme) => theme.spacing[9]} bgBlue20>
          theme
        </View>

        <View s={[50, 100, 200, 300]} bgBlue20>
          responsive
        </View>
      </View>
      <View evenly wrap>
        <View w={[1 / 3, '100%', 400]} h-100 bgRed20></View>
        <View w={[1 / 3, '100%', 400]} h-100 bgGreen20></View>
        <View w={[1 / 3, '100%', 400]} h-100 bgYellow20></View>
      </View>
    </View>
  )
}
