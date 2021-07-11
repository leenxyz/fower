import React, { cloneElement, forwardRef } from 'react';
import { FowerColor } from '@fower/core';
import { BoxComponent } from '@fower/react';
import { styled } from '@fower/styled';
import { Box } from '@fower/react';

type Size = 'xs' | 'sm' | 'md' | 'lg' | number;

export interface ButtonProps {
  colorScheme?: FowerColor;

  colorMode?: 'dark' | 'light';

  size?: Size;

  variant?: 'link' | 'outline' | 'filled' | 'ghost' | 'unstyled';

  leftIcon?: React.ReactElement;

  rightIcon?: React.ReactElement;

  icon?: React.ReactElement;

  disabled?: boolean;

  loading?: boolean;
}

export const Button: BoxComponent<'button', ButtonProps> = forwardRef(
  (props: ButtonProps, ref) => {
    const {
      as = 'button',
      size = 'md',
      variant = 'filled',
      leftIcon,
      rightIcon,
      icon,
      colorScheme = 'brand400',
      colorMode = 'dark',
      disabled,
      loading,
      children,
      ...rest
    } = props as any;

    const sizeStyle = getSizeStyle(size);

    if (icon) delete sizeStyle?.px; // icon button 不要 padding

    const isFilled = variant === 'filled';
    const isLight = colorMode === 'light';
    const notAllowed = !!(disabled || loading);
    const Comp = styled(as);

    const iconButtonProps = icon ? { w: sizeStyle.h } : {};

    console.log('variant:', getVariantStyle(colorScheme, notAllowed)[variant]);

    return (
      <Comp
        ref={ref}
        className="bone-button"
        inlineFlex
        toCenter
        borderNone
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
        {icon}

        {leftIcon && cloneElement(leftIcon, { mr: 8, s: sizeStyle.text })}
        {children}
        {rightIcon && cloneElement(rightIcon, { ml: 8, s: sizeStyle.text })}
      </Comp>
    );
  },
) as any;

function getVariantStyle(color: string, notAllowed: any = null): any {
  return {
    link: {},
    unstyled: {},
    ghost: {},
    filled: {
      // color: 'white',
      white: true,
      bg: color,
      ...(notAllowed ?? {
        'bg--hover': `${color}--D8`,
        'bg--active': `${color}--D20`,
      }),
    },
    outline: {
      color,
      border: true,
      borderColor: color,
      ...(notAllowed ?? {
        'bg--hover': `${color}--T80`,
        'bg--active': `${color}--T90`,
      }),
    },
  };
}

interface Sizes {
  [key: string]: {
    h: number;
    text: number;
    px?: number;
  };
}
function getSizeStyle(size: Size) {
  const sizes: Sizes = {
    xs: { h: 24, text: 12, px: 8 },
    sm: { h: 32, text: 14, px: 12 },
    md: { h: 40, text: 16, px: 15 },
    lg: { h: 48, text: 18, px: 18 },
  };
  if (typeof size === 'string') return sizes[size];
  return { h: size, px: size * 0.375, text: size * 0.35 };
}

export default () => {
  return (
    <Box>
      <Button>GOOGO</Button>
    </Box>
  );
};
