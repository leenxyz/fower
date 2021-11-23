import * as CSS from 'csstype'

// tslint:disable-next-line:export-just-namespace
export = FowerTypes
export as namespace FowerTypes

declare namespace FowerTypes {
  type ModeType = 'light' | 'dark' | ({} & string)
  interface FowerCSSProperties
    extends AtomicProps,
      Omit<CSS.Properties, keyof FowerTypes.AtomicProps> {}

  type CSSObject<T = any> =
    | (FowerCSSProperties & PseudosObject)
    | {
        [K in keyof T]?: T[K] extends object
          ? CSSObject<T[K]>
          : FowerCSSProperties | number | string | boolean | (() => any)
      }

  type GroupedAtomicProps = AtomicProps | (keyof AtomicProps)[]

  type PseudosObject = { [P in CSS.Pseudos]?: FowerCSSProperties }

  interface PostfixAtomicProps {
    _sm?: GroupedAtomicProps
    _md?: GroupedAtomicProps
    _lg?: GroupedAtomicProps
    _xl?: GroupedAtomicProps
    _2xl?: GroupedAtomicProps

    _dark?: GroupedAtomicProps

    _active?: GroupedAtomicProps
    _checked?: GroupedAtomicProps
    _disabled?: GroupedAtomicProps
    _enabled?: GroupedAtomicProps
    _default?: GroupedAtomicProps
    _empty?: GroupedAtomicProps
    _focus?: GroupedAtomicProps
    _focusWithin?: GroupedAtomicProps
    _invalid?: GroupedAtomicProps
    _hover?: GroupedAtomicProps
    _link?: GroupedAtomicProps
    _visited?: GroupedAtomicProps
    _firstChild?: GroupedAtomicProps
    _lastChild?: GroupedAtomicProps
    _after?: GroupedAtomicProps
    _before?: GroupedAtomicProps
    _placeholder?: GroupedAtomicProps
    _selection?: GroupedAtomicProps
  }

  interface AtomicProps extends PostfixAtomicProps {
    /**
     * if Atomic Prop is conflict with others, you can use this ignore Fower Atomic Prop, And it will be pass to inner component.
     *
     * ```tsx
     * import React, { FC } from 'react'
     * import { styled } from '@fower/styled'
     *
     * interface TestProps {
     *   toCenter: string
     * }
     *
     * const Test: FC<TestProp> = ({ toCenter, className }) => {
     *    return <Box className={className}>{toCenter}</Box>
     * }
     *
     * const StyledTest = styled(Test)
     *
     * // toCenter prop will be handled by Fower. And convert it to className prop.
     * <StyledTest toCenter />
     *
     * // toCenter prop will be handled by Test Component.
     * <StyledTest toCenter excludedProps={['toCenter']} />
     * ```
     */
    excludedProps?: string[]

    /**
     * CSS
     *
     * Like style prop, but you can do more.
     *
     * Fower will auto add a className to element and parse css prop`s value to a css string, then add it to style element.
     *
     * @example
     * ```tsx
     * <Box css={
     *  {
     *     transition: 'all 0.3s',
     *     '::after': {
     *        content: '""',
     *        display: 'block',
     *      },
     *     '>span': {
     *        color: 'red',
     *     },
     *     '.dot': {
     *        '.text': {
     *           color: 'yellow',
     *           fontSize: '12px',
     *        },
     *     }
     *  }
     * }></Box>
     * ```
     */
    css?: CSSObject
  }
}
