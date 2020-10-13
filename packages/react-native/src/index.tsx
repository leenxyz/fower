export * from './components/Button'
export * from './components/FlatList'
export * from './components/Image'
export * from './components/ImageBackground'
export * from './components/ScrollView'
export * from './components/Text'
export * from './components/TextInput'
export * from './components/TouchableHighlight'
export * from './components/TouchableOpacity'
export * from './components/TouchableWithoutFeedback'
export * from './components/View'

import { Styli } from './styli-core'

// TODO: 需要优化
Styli.config({
  transformUnit(value) {
    return value as any
  },
})
