import { Backgrounds } from './background.types'
import { Borders } from './border.types'
import { Flex } from './flex.types'
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
import { OutLine } from './outline.types'
import { CssObject } from './common.types'
export interface AtomicProps
  extends Sizes,
    Paddings,
    Margins,
    Flex,
    Borders,
    Positions,
    Colors,
    Backgrounds,
    Texts,
    ZIndex,
    Shadows,
    Displays,
    OverFlows,
    OutLine,
    Opacity {
  css?: CssObject
  debug?: boolean | CssObject
  debugChildren?: boolean | CssObject
  debugAll?: boolean | CssObject
  reset?: boolean | CssObject
}
