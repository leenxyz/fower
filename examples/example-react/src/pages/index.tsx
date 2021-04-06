import { Box, injectGlobalStyle } from '@styli/react';
import { configure, setTheme, styli } from '@styli/core';
import { useState } from 'react';
import { styled } from '@styli/styled';
import { Link } from 'umi';

const Button = styled('button');

const pages = [
  'background',
  'CSSProp',
  'Flex',
  'LayoutEngine',
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
];

// injectGlobalStyle({
//   '*': {},
//   body: {
//     margin: '0',
//     backgroundColor: 'red',
//     ':hover': {
//       backgroundColor: 'green',
//     },
//   },
//   div: {
//     backgroundColor: 'yellow',
//     ':hover': {
//       backgroundColor: 'blue',
//     },
//   },

// });

configure({
  pseudos: ['hover'],
});

setTheme({
  colors: {
    brandLight: '#e0f2fe',
    brandLighter: '#bae6fd',
    brandLightest: '#7dd3fc',
    brandPrimary: '#38bdf8',
    brandDark: '#0ea5e9',
    brandDarker: '#0284c7',
    brandDarkest: '#0369a1',

    foo: '#f90',
  },
  spacings: {
    100: 400,
  },
  breakpoints: {
    '4xl': '',
  },
});

styli.registerAtomicProps(/heading(sm|md|lg)/i, (atom) => {
  const size = atom.propKey.replace('heading', '').toLowerCase();
  switch (size) {
    case 'sm':
      atom.style = { fontSize: 16 };
      break;
    case 'md':
      atom.style = { fontSize: 24 };
      break;
    case 'lg':
      atom.style = { fontSize: 32 };
      break;
    default:
      break;
  }
  return atom;
});

styli.registerAtomicProps('textBody', {
  fontSize: 20,
});

declare module '@styli/types' {
  export interface AtomicProps {
    textBody?: boolean;
    info?: boolean;
    bgInfo?: boolean;
    borderInfo?: boolean;

    brandLight?: boolean;
    brandLighter?: boolean;
    brandLightest?: boolean;

    brandPrimary?: boolean;

    brandDark?: boolean;
    brandDarker?: boolean;
    brandDarkest?: boolean;

    bgBrandPrimary?: boolean;

    borderBrandPrimary?: boolean;
  }
}

export default function IndexPage() {
  const [colorMode, setColorMode] = useState('default');
  return (
    <div>
      <Box green300--i--hover toCenter gray500--dark spaceX2>
        {pages.map((i) => (
          <Link to={'/' + i}>{i}</Link>
        ))}
      </Box>
      <Box
        as="button"
        onClick={() => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default');
          if (colorMode === 'default') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }}
      >
        切换 {colorMode}
      </Box>

      <Box as="h2" spaceX4 row debugChildren>
        <Box>BB</Box>
        <Box>BB</Box>
        <Box>BB</Box>
        <Box>BB</Box>
        <Box>BB</Box>
      </Box>
    </div>
  );
}
