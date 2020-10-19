import React from 'react'
import { View, Image, Text } from '@styli/react'

export const UtilityFirstStyli = () => {
  return (
    <View center bgGray200 h-200>
      <View centerY p-20 w-300 bgWhite rounded-10>
        <Image s-60 rounded-8 src="/img/jobs.webp" />
        <View ml-10>
          <View text-22 fontBold>
            Steve Jobs
          </View>
          <Text gray800>Co-founder of Apple Inc.</Text>
        </View>
      </View>
    </View>
  )
}
