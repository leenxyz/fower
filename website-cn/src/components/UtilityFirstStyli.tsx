import React from 'react'
import { View, Text, Image } from '@styli/react'

export const UtilityFirstStyli = () => {
  return (
    <View center bgGray20 h-200>
      <View centerY p-20 w-300 bgWhite rounded-10>
        <Image s-60 rounded-8 src="/img/jobs.jpg" />
        <View ml-10>
          <View f-22 fontBold>
            Steve Jobs
          </View>
          <Text gray80>Co-founder of Apple Inc.</Text>
        </View>
      </View>
    </View>
  )
}
