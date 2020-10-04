import { Backgrounds } from './background.types'
import { Borders } from './border.types'
import { Flexs } from './flex.types'
import { Margins } from './margin.types'
import { Paddings } from './padding.types'
import { Sizes } from './size.types'
import { Texts } from './text.types'
import { Positions } from './position.types'

export interface ZIndex {
  /**
   * Set z-index
   *
   * 用 View 作为示例:
   * ```tsx
   * <View zIndex-10></View>
   * <View zIndex={10}></View>
   * ```
   */
  zIndex?: boolean | number
}

export enum ModifierType {
  margin = 'margin',
  padding = 'padding',
  border = 'border',
  position = 'position',
  text = 'text',
  size = 'size',
  ZIndex = 'ZIndex',
}

export interface Modifiers
  extends Sizes,
    Paddings,
    Margins,
    Flexs,
    Borders,
    Positions,
    Backgrounds,
    Texts,
    ZIndex,
    CustomProps {}

// 自定义属性
export interface CustomProps {
  [key: string]: any
}
