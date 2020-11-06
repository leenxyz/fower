import { Property } from 'csstype'
import { Theme } from '@styli/theming'

type DisplayFn = (theme: Theme) => Property.Display | Property.Display[]

export interface Displays {
  display?: Property.Display | Property.Display[] | DisplayFn

  inline?: boolean
  InlineBlock?: boolean
  block?: boolean

  InlineFlex?: boolean

  grid?: boolean
  InlineGrid?: boolean

  // none?: boolean
  hide?: boolean

  table?: boolean
}
