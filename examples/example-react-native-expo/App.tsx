import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from '@fower/react-native'

export default function App() {
  return (
    <View mt20 mx10 p4 rounded bgGreen200>
      <Text red300>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
