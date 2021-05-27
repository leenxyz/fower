import { Box } from '@fower/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { cloneElement, forwardRef } from 'react'
import { FowerColor } from '@fower/types'
import { BoxComponent } from '@fower/react'
import { styled } from '@fower/styled'

type Size = 'xs' | 'sm' | 'md' | 'lg' | number

export interface ButtonProps {
  colorScheme?: FowerColor

  size?: Size

  variant?: 'outline' | 'filled' | 'ghost' | 'light'

  leftIcon?: React.ReactElement

  rightIcon?: React.ReactElement

  icon?: React.ReactElement

  disabled?: boolean

  loading?: boolean
}

export const Button: BoxComponent<'button', ButtonProps> = forwardRef((props: ButtonProps, ref) => {
  const {
    as = 'button',
    size = 'md',
    variant = 'filled',
    leftIcon,
    rightIcon,
    icon,
    colorScheme = 'brand',
    disabled,
    loading,
    children,
    ...rest
  } = props as any

  const sizeStyle = getSizeStyle(size)

  if (icon) delete sizeStyle?.px // icon button 不要 padding

  const isFilled = variant === 'filled'
  const notAllowed = !!(disabled || loading)
  const Comp = styled(as)

  const iconButtonProps = icon ? { w: sizeStyle.h } : {}

  return (
    <Comp
      ref={ref}
      className="bone-button"
      inlineFlex
      toCenter
      outlineNone
      cursorPointer
      rounded
      opacity-40={notAllowed}
      cursorNotAllowed={notAllowed}
      css={{
        appearance: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        transition: 'all 250ms ease 0s',
      }}
      {...getVariantStyle(colorScheme, notAllowed)[variant]}
      {...sizeStyle}
      {...iconButtonProps}
      {...rest}
    >
      {icon && cloneElement(icon, { square: sizeStyle.text * 1.2 })}

      {leftIcon && cloneElement(leftIcon, { mr: 8, square: sizeStyle.text })}
      {children}
      {rightIcon && cloneElement(rightIcon, { ml: 8, square: sizeStyle.text })}
    </Comp>
  )
}) as any

function getVariantStyle(color: string, notAllowed: any = null): any {
  const styles = {
    light: {
      color,
      'bg--T90': color,
      borderColor: color,
      ...(notAllowed
        ? {}
        : {
            'bg--hover': `${color}--T80`,
            'bg--active': `${color}--T90`,
          }),
    },
    filled: {
      white: true,
      'white--dark': true,
      bg: color,
      ...(notAllowed
        ? {}
        : {
            'bg--hover': `${color}--D8`,
            'bg--active': `${color}--D20`,
          }),
    },
    ghost: {
      color,
      ...(notAllowed
        ? {}
        : {
            'bg--hover': `${color}--T80`,
            'bg--active': `${color}--T90`,
          }),
    },
    outline: {
      border: true,
      borderColor: color,
      color: color,
      ...(notAllowed
        ? {}
        : {
            'bg--hover': color,
            'color--hover': 'white',
            'bg--active': `${color}--D8`,
          }),
    },
  }
  return styles
}

interface Sizes {
  [key: string]: {
    h: number
    text: number
    px?: number
  }
}
function getSizeStyle(size: Size) {
  const sizes: Sizes = {
    xs: { h: 24, text: 12, px: 8 },
    sm: { h: 32, text: 14, px: 12 },
    md: { h: 40, text: 16, px: 15 },
    lg: { h: 48, text: 18, px: 18 },
  }
  if (typeof size === 'string') return sizes[size]
  return { h: size, px: size * 0.375, text: size * 0.35 }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <Button roundedFull spaceX2 text white--hover>
          foo
        </Button>
        <Box bgRed200 p4>
          foo
        </Box>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
