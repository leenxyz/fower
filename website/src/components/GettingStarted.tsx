import React from 'react'
// import { View, Image, Text } from '@styli/react'
import { View, Image, Text } from './styli-react'

export const GettingStarted = () => {
  return (
    <View center bgGray200 h-200 mb-10>
      <View centerY p-10 w-260 bgWhite rounded-10>
        <Image s-48 rounded-8 src="/img/jobs.webp" />
        <View ml-10>
          <View f-20 fontBold>
            Steve Jobs
          </View>
          <Text gray800>Co-founder of Apple Inc.</Text>
        </View>
      </View>
    </View>
  )
}
