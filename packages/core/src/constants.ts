function upFirst(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

interface MarginMaps {
  [key: string]: string[]
}

interface SizeMaps {
  [key: string]: string[]
}

interface PaddingMaps {
  [key: string]: string[]
}

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
  Top: upFirst(G.top),
  Right: upFirst(G.right),
  Bottom: upFirst(G.bottom),
  Left: upFirst(G.left),
}

export const positionKeys = [G.static, G.fixed, G.absolute, G.relative, G.sticky]

export const positionMaps: any = {
  T: G.top,
  L: G.left,
  R: G.right,
  B: G.bottom,
}

export const paddingMaps: PaddingMaps = {
  p: [G.padding],
  pl: [`${G.padding}${P.Left}`],
  pt: [`${G.padding}${P.Top}`],
  pr: [`${G.padding}${P.Right}`],
  pb: [`${G.padding}${P.Bottom}`],
  px: [`${G.padding}${P.Left}`, `${G.padding}${P.Right}`],
  py: [`${G.padding}${P.Top}`, `${G.padding}${P.Bottom}`],
}

export const marginMaps: MarginMaps = {
  m: [G.margin],
  ml: [`${G.margin}${P.Left}`],
  mt: [`${G.margin}${P.Top}`],
  mr: [`${G.margin}${P.Right}`],
  mb: [`${G.margin}${P.Bottom}`],
  mx: [`${G.margin}${P.Left}`, `${G.margin}${P.Right}`],
  my: [`${G.margin}${P.Top}`, `${G.margin}${P.Bottom}`],
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
  minW: ['minWidth'],
  maxW: ['maxWidth'],
  minH: ['minHeight'],
  maxH: ['maxHeight'],
}

export const roundedMaps: any = {
  rounded: [
    `${P.Top}${P.Left}`,
    `${P.Top}${P.Right}`,
    `${P.Bottom}${P.Left}`,
    `${P.Bottom}${P.Right}`,
  ],
  roundedT: [`${P.Top}${P.Left}`, `${P.Top}${P.Right}`],
  roundedR: [`${P.Top}${P.Right}`, `${P.Bottom}${P.Right}`],
  roundedB: [`${P.Bottom}${P.Left}`, `${P.Bottom}${P.Right}`],
  roundedL: [`${P.Top}${P.Left}`, `${P.Bottom}${P.Left}`],
  roundedTL: [`${P.Top}${P.Left}`],
  roundedTR: [`${P.Top}${P.Right}`],
  roundedBL: [`${P.Bottom}${P.Left}`],
  roundedBR: [`${P.Bottom}${P.Right}`],
}

export const centerX = `${G.center}X`

export const centerY = `${G.center}Y`
