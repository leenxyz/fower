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
import { CssObject } from './common.types'

export * from './common.types'

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
    Opacity {
  css?: CssObject
  debug?: boolean
}
