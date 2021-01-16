export interface AtomicProps {
  /**
   * if Atomic Prop is conflict with others, you can use this ignore Styli Atomic Prop, And it will be pass to inner component.
   *
   * ```tsx
   * import React, { FC } from 'react'
   * import { styled } from '@styli/react'
   *
   * interface TestProps {
   *   center: string
   * }
   *
   * const Test: FC<TestProp> = ({ center, className }) => {
   *    return <View className={className}>{center}</View>
   * }
   *
   * const StyledTest = styled(Test)
   *
   * // center prop will be handled by Styli. And convert it to className prop.
   * <StyledTest center />
   *
   * // center prop will be handled by Test Component.
   * <StyledTest center styliIgnore={['center']} />
   * ```
   */
  styliIgnore?: string[]

  /**
   * This Atomic Prop can improve code readability and semantically.
   */
  styliName?: string
}
