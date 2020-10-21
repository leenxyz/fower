import React, { useRef } from 'react'
import { View, Image, Text } from '@styli/react'

export const GettingStarted = () => {
  const ref = useRef()
  console.log('ref:', ref)
  return (
    <View ref={ref} center bgGray200 h-200 mb-10 className="haha">
      <View centerY p-10 w-260 bgWhite rounded-10>
        <Image c-48 src="/img/jobs.jpg" />
        <View ml-10>
          <View f-20>Steve Jobs</View>
          <Text gray800>Co-founder of Apple Inc.</Text>
        </View>
      </View>
    </View>
  )
}
