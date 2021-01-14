export interface AtomicProps {
  /**
   * if Atomic Css is conflict with others, you can use this ignore Styli Atomic Css, And it will be pass to inner component.
   *
   * ```tsx
   * import { Button } from 'antd'
   * import { styled} from '@styli/react'
   *
   * const StyledButton = styled(Button)
   *
   * // block will be pass to antd component
   * <StyledButton styliIgnore={['block']} block>
   *  Confirm
   * </StyledButton>
   * ```
   */
  styliIgnore?: string[]
}
