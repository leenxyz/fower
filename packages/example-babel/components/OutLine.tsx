import React from 'react'
import { View, Input, Heading } from '@styli/react'

export const OutLine = () => {
  return (
    <View>
      <Heading f-30 fontBold>
        OutLine
      </Heading>
      <View debug center>
        <View center s-200>
          <Input defaultValue="common input" />
        </View>
        <View center s-200>
          <Input outlineNone defaultValue="outlineNone" />
        </View>
        <View center s-200>
          <Input outlineOffset-10 defaultValue="outlineOffset-10" />
        </View>
        <View center s-200>
          <Input
            outline="8px ridge rgba(170, 50, 220, .6)"
            defaultValue="8px ridge rgba(170, 50, 220, .6)"
          />
        </View>
      </View>
    </View>
  )
}
