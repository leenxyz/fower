import { setConfig } from '@fower/core'
import { styled } from '@fower/styled'
import {
  Button as ButtonOfRemax,
  Form as FormOfRemax,
  Image as ImageOfRemax,
  Input as InputOfRemax,
  Label as LabelOfRemax,
  Navigator as NavigatorOfRemax,
  Text as TextOfRemax,
  Textarea as TextareaOfRemax,
  View as ViewOfRemax,
  WebView as WebViewOfRemax,
  Modal as ModalOfRemax,
} from 'remax/one'
import { presetRemax } from '@fower/preset-remax'

setConfig(presetRemax)

export const Button = styled(ButtonOfRemax)
export const Form = styled(FormOfRemax)
export const Image = styled(ImageOfRemax)
export const Input = styled(InputOfRemax)
export const Label = styled(LabelOfRemax)
export const Navigator = styled(NavigatorOfRemax)
export const Text = styled(TextOfRemax)
export const Textarea = styled(TextareaOfRemax)
export const View = styled(ViewOfRemax)
export const WebView = styled(WebViewOfRemax)
export const Modal = styled(ModalOfRemax)
