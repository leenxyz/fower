import { Styli, styled } from '@styli/core'
import {
  Text as RNText,
  View as RNView,
  Button as RNButton,
  FlatList as RNFlatList,
  Image as RNImage,
  ImageBackground as RNImageBackground,
  ScrollView as RNScrollView,
  TextInput as RNTextInput,
  TouchableHighlight as RNTouchableHighlight,
  TouchableOpacity as RNTouchableOpacity,
  TouchableWithoutFeedback as RNTouchableWithoutFeedback,
} from 'react-native'

export const Text = styled(RNText)
export const View = styled(RNView)
export const Button = styled(RNButton)
export const FlatList = styled(RNFlatList)
export const Image = styled(RNImage)
export const ImageBackground = styled(RNImageBackground)
export const ScrollView = styled(RNScrollView)
export const TextInput = styled(RNTextInput)
export const TouchableHighlight = styled(RNTouchableHighlight)
export const TouchableOpacity = styled(RNTouchableOpacity)
export const TouchableWithoutFeedback = styled(RNTouchableWithoutFeedback)

Styli.config({ unit: '' })
