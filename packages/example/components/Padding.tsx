import React from 'react'
import { View, Heading } from '@styli/react'

export const Padding = () => {
  return (
    <View>
      <Heading f-30 fontBold>
        Padding
      </Heading>

      <View>
        <View p4 debug inlineBlock>
          p4
        </View>
        <View pt4 debug inlineBlock>
          pt4
        </View>
        <View pr4 debug inlineBlock>
          pr4
        </View>
        <View pb4 debug inlineBlock>
          pb4
        </View>
        <View pl4 debug inlineBlock>
          pl4
        </View>
        <View px4 debug inlineBlock>
          px4
        </View>
        <View py4 debug inlineBlock>
          py4
        </View>

        <View p-20 debug inlineBlock>
          p-20
        </View>
        <View pt-20 debug inlineBlock>
          p-20
        </View>

        <View pt-20 debug inlineBlock>
          pt-20
        </View>
        <View pr-20 debug inlineBlock>
          pr-20
        </View>
        <View pt-20 debug inlineBlock>
          pt-20
        </View>
        <View pl-20 debug inlineBlock>
          pl-20
        </View>
        <View px-20 debug inlineBlock>
          px-40
        </View>
        <View py-20 debug inlineBlock>
          py-40
        </View>
      </View>
    </View>
  )
}
