import React from 'react'
import { View, Image, Text } from '@styli/react'

export const GettingStarted = () => {
  return (
    <View toCenter bgGray200 h-200 mb-10>
      <View toCenterY p-10 w-260 bgWhite rounded-10>
        <Image circle-48 src="/img/jobs.jpg" />
        <View ml-10>
          <View f-20>Steve Jobs</View>
          <Text gray800>Co-founder of Apple Inc.</Text>
        </View>
      </View>
    </View>
  )
}
