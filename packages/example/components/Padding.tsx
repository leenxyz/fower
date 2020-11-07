import React from 'react'
import { View, Heading } from '@styli/react'

export const Padding = () => {
  return (
    <View>
      <Heading f-30 fontBold>
        Padding
      </Heading>

      <View p-20 debug inlineBlock>
        padding: 20
      </View>

      <br />
      <View px-40 debug inlineBlock>
        padding-left: 40;
        <br />
        padding-right: 40;
      </View>
    </View>
  )
}
