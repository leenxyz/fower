import { Property } from 'csstype'
import { Theme } from '../Theme'

type Display = Property.Display | Property.Display[]
type Transform = Property.Transform | Property.Transform[]
type Transition = Property.Transition | Property.Transition[]
type WhiteSpace = Property.WhiteSpace | Property.WhiteSpace[]
type VerticalAlign = Property.VerticalAlign | Property.VerticalAlign[]
type Appearance = Property.Appearance | Property.Appearance[]
type UserSelect = Property.UserSelect | Property.UserSelect[]

export interface Niches {
  display?: Display | ((theme: Theme) => Display)
  transform?: Transform | ((theme: Theme) => Transform)
  transition?: Transition | ((theme: Theme) => Transition)
  whiteSpace?: WhiteSpace | ((theme: Theme) => WhiteSpace)
  verticalAlign?: VerticalAlign | ((theme: Theme) => VerticalAlign)
  appearance?: Appearance | ((theme: Theme) => Appearance)
  userSelect?: UserSelect | ((theme: Theme) => UserSelect)
}
