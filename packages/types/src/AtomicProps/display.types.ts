import { Property } from 'csstype'
import { Theme } from '../Theme'

type DisplayFn = (theme: Theme) => Property.Display | Property.Display[]

export interface Displays {
  display?: Property.Display | Property.Display[] | DisplayFn

  inline?: boolean
  inlineBlock?: boolean
  block?: boolean

  inlineFlex?: boolean

  grid?: boolean
  inlineGrid?: boolean

  // none?: boolean
  hide?: boolean

  table?: boolean
}
