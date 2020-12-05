import { PropValue } from './common.types'
export interface Opacity {
  /**
   * Set opacity
   *
   * opacity-20 is `opacity: 0.2`
   *
   * @example
   * ```tsx
   * <View opacity></View>
   * <View opacity-20></View>
   * <View opacity="20"></View>
   * <View opacity={20}></View>
   * ```
   */
  opacity?: PropValue
}
