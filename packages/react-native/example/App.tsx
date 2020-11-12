import React from 'react'
import { SafeAreaView } from 'react-native'
import { View, Text } from './src'
// import { View, Text } from 'react-native'

export default function App() {
  return (
    <SafeAreaView>
      <View bgGreen40 center column flex-1>
        <View>
          <Text>Hello world</Text>
        </View>
        <View>
          <Text>Open up App.tsx to start working on your app!!</Text>
        </View>
        <View>
          <Text>Open up App.tsx to start working on your app!</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}
