import { upFirst } from '@styli/utils'
import { MarginMaps, PaddingMaps, SizeMaps } from '../types'

export const G = {
  padding: 'padding',
  margin: 'margin',
  flex: 'flex',
  top: 'top',
  left: 'left',
  right: 'right',
  start: 'start',
  end: 'end',
  bottom: 'bottom',
  between: 'between',
  around: 'around',
  evenly: 'evenly',
  center: 'center',
  space: 'space',
  row: 'row',
  column: 'column',
  nowrap: 'nowrap',
  wrap: 'wrap',

  static: 'static',
  fixed: 'fixed',
  absolute: 'absolute',
  relative: 'relative',
  sticky: 'sticky',
}

export const P = {
  top: upFirst(G.top),
  right: upFirst(G.right),
  bottom: upFirst(G.bottom),
  left: upFirst(G.left),
}

export const positionKeys = [G.static, G.fixed, G.absolute, G.relative, G.sticky]

export const positionMaps: any = {
  t: G.top,
  l: G.left,
  r: G.right,
  b: G.bottom,
}

export const paddingMaps: PaddingMaps = {
  p: [G.padding],
  pl: [`${G.padding}${P.left}`],
  pt: [`${G.padding}${P.top}`],
  pr: [`${G.padding}${P.right}`],
  pb: [`${G.padding}${P.bottom}`],
  px: [`${G.padding}${P.left}`, `${G.padding}${P.right}`],
  py: [`${G.padding}${P.top}`, `${G.padding}${P.bottom}`],
}

export const marginMaps: MarginMaps = {
  m: [G.margin],
  ml: [`${G.margin}${P.left}`],
  mt: [`${G.margin}${P.top}`],
  mr: [`${G.margin}${P.right}`],
  mb: [`${G.margin}${P.bottom}`],
  mx: [`${G.margin}${P.left}`, `${G.margin}${P.right}`],
  my: [`${G.margin}${P.top}`, `${G.margin}${P.bottom}`],
}

export const flexMaps: any = {
  start: `${G.flex}-${G.start}`,
  end: `${G.flex}-${G.end}`,
  between: `${G.space}-${G.between}`,
  around: `${G.space}-${G.around}`,
  evenly: `${G.space}-${G.evenly}`,
  center: G.center,
  baseline: 'baseline',
  stretch: 'stretch',
}

export const sizeMaps: SizeMaps = {
  w: ['width'],
  h: ['height'],
  s: ['width', 'height'],
  c: ['width', 'height', 'borderRadius'],
  minW: ['minWidth'],
  maxW: ['maxWidth'],
  minH: ['minHeight'],
  maxH: ['maxHeight'],
}

export const roundedMaps: any = {
  rounded: [
    `${P.top}${P.left}`,
    `${P.top}${P.right}`,
    `${P.bottom}${P.left}`,
    `${P.bottom}${P.right}`,
  ],
  roundedT: [`${P.top}${P.left}`, `${P.top}${P.right}`],
  roundedR: [`${P.top}${P.right}`, `${P.bottom}${P.right}`],
  roundedB: [`${P.bottom}${P.left}`, `${P.bottom}${P.right}`],
  roundedL: [`${P.top}${P.left}`, `${P.bottom}${P.left}`],
  roundedTL: [`${P.top}${P.left}`],
  roundedTR: [`${P.top}${P.right}`],
  roundedBL: [`${P.bottom}${P.left}`],
  roundedBR: [`${P.bottom}${P.right}`],
}

export const centerX = `${G.center}X`

export const centerY = `${G.center}Y`

export const borderStyles = ['solid', 'dashed', 'dotted', 'double', 'none']

export const headingTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export const shadowSize = ['xs', 'sm', 'md', 'base', 'xl', '2xl', 'outline', 'none', 'inner']

export const textAlign = ['textLeft', 'textCenter', 'textRight', 'textJustify']

export const flexAlign = [
  G.row,
  G.column,
  G.center,
  centerX,
  centerY,
  G.left,
  G.right,
  G.top,
  G.bottom,
  G.between,
  G.around,
  G.evenly,
]

export const displayTypes = [
  'block',
  'inline',
  'none',
  'inlineBlock',
  'flow',
  'flowRoot',
  'table',
  'flex',
  'grid',
  'ruby',
  'tableRowGroup',
  'tableHeaderGroup',
  'tableFooterGroup',
  'tableRow',
  'tableCell',
  'tableColumnGroup',
  'tableColumn',
  'tableCaption',
  'inlineTable',
  'inlineFlex',
  'inlineGrid',
  'inherit',
  'initial',
  'unset',
]

export const overFlowTypes = ['visible', 'hidden', 'scroll', 'auto', 'inherit', 'initial', 'unset']
