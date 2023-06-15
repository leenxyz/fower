import Link from 'next/link'
import { Box } from '@fower/react'
import { useState } from 'react'

const pages = [
  'Background',
  'CSSProp',
  'Flex',
  'Layout',
  'Opacity',
  'Position',
  'Shadow',
  'TextSize',
  'popper',
  'Border',
  'Color',
  'FlexBox',
  'Leading',
  'OutLine',
  'Pseudo',
  'Size',
  'Width',
  'Box',
  'Cursor',
  'FontWeight',
  'Margin',
  'Overflow',
  'Responsive',
  'Space',
  'ZIndex',
  'BoxAlignment',
  'Display',
  'Grid',
  'Nested',
  'Padding',
  'Rounded',
  'TextAlignment',
]

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    textBody?: boolean
    info?: boolean
    bgInfo?: boolean
    borderInfo?: boolean

    brandLight?: boolean
    brandLighter?: boolean
    brandLightest?: boolean

    brandPrimary?: boolean

    brandDark?: boolean
    brandDarker?: boolean
    brandDarkest?: boolean

    bgBrandPrimary?: boolean

    borderBrandPrimary?: boolean
  }
}

export default function IndexPage() {
  const [colorMode, setColorMode] = useState('default')
  return (
    <Box p10>
      <Box toCenter gray500--dark spaceX2 flexWrap gap-10>
        {pages.map((i) => (
          <Link key={i} href={'/' + i}>
            {i}
          </Link>
        ))}
      </Box>
      <Box
        as="button"
        onClick={() => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
          if (colorMode === 'default') {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        }}
      >
        切换 {colorMode}
      </Box>
    </Box>
  )
}
