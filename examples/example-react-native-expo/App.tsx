import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { View, Text, Image } from '@fower/react-native'
import Jobs from './assets/jobs.jpg'

const ProfileCard = () => (
  <View toCenterY p-10 w-260 bgWhite rounded-10>
    <Image circle-48 source={Jobs} />
    <View ml-10>
      <View textXL fontBold>
        <Text>Steve Jobs</Text>
      </View>
      <Text gray800>Co-founder of Apple Inc.</Text>
    </View>
  </View>
)

export default function App() {
  return (
    <View mt20 mx10 p4 rounded bgGreen200>
      <Text red300>Open up App.tsx to start working on your app!</Text>
      <ProfileCard />
      <StatusBar style="auto" />
    </View>
  )
}
