export * from './background.types'
export * from './border.types'
export * from './padding.types'
export * from './position.types'
export * from './size.types'
export * from './text.types'
export * from './margin.types'
export * from './flex.types'
export * from './shadow.types'
export * from './opacity.types'
export * from './display.types'
export * from './overflow.types'

import { Backgrounds } from './background.types'
import { Borders } from './border.types'
import { Flexs } from './flex.types'
import { Margins } from './margin.types'
import { Paddings } from './padding.types'
import { Sizes } from './size.types'
import { Texts } from './text.types'
import { Positions, ZIndex } from './position.types'
import { Shadows } from './shadow.types'
import { Opacity } from './opacity.types'
import { Colors } from './color.types'
import { Displays } from './display.types'
import { OverFlows } from './overflow.types'

export enum ModifierType {
  margin = 'margin',
  padding = 'padding',
  border = 'border',
  position = 'position',
  text = 'text',
  size = 'size',
  ZIndex = 'ZIndex',
  opacity = 'opacity',
  shadow = 'shadow',
  flex = 'flex',
  flexItem = 'flexItem',
}

export interface Modifiers
  extends Sizes,
    Paddings,
    Margins,
    Flexs,
    Borders,
    Positions,
    Colors,
    Backgrounds,
    Texts,
    ZIndex,
    Shadows,
    Displays,
    OverFlows,
    Opacity {}
