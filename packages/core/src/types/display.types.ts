import CSS from 'csstype'

export interface Displays {
  display?: CSS.Property.Display | CSS.Property.Display[]

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
