import { setConfig } from '@fower/core'
import { styled } from '@fower/styled'
import {
  View as OneView,
  Text as OneText,
  Button as OneButton,
  Form as OneForm,
  Image as OneImage,
  Input as OneInput,
  Label as OneLabel,
  Modal as OneModal,
  Navigator as OneNavigator,
  Textarea as OneTextarea,
  WebView as OneWebView,
} from 'remax/one'
import { presetRemax } from '@fower/preset-remax'

setConfig(presetRemax)

export const View = styled(OneView)
export const Text = styled(OneText)
export const Button = styled(OneButton)
export const Form = styled(OneForm)
export const Image = styled(OneImage)
export const Input = styled(OneInput)
export const Label = styled(OneLabel)
export const Modal = styled(OneModal)
export const Navigator = styled(OneNavigator)
export const Textarea = styled(OneTextarea)
export const WebView = styled(OneWebView)
