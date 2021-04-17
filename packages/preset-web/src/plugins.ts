import background from 'styli-plugin-background'
import border from 'styli-plugin-border'
import flexItem from 'styli-plugin-box-alignment'
import color from 'styli-plugin-color'
import display from 'styli-plugin-display'
import flexBox from 'styli-plugin-flexbox'
import grid from 'styli-plugin-grid'
import layoutEngine from 'styli-plugin-layout-engine'
import lineHeight from 'styli-plugin-line-height'
import margin from 'styli-plugin-margin'
import opacity from 'styli-plugin-opacity'
import overflow from 'styli-plugin-overflow'
import padding from 'styli-plugin-padding'
import position from 'styli-plugin-position'
import rounded from 'styli-plugin-rounded'
import shadow from 'styli-plugin-shadow'
import size from 'styli-plugin-size'
import textAlign from 'styli-plugin-text-align'
import textSize from 'styli-plugin-text-size'
import textTransform from 'styli-plugin-text-transform'
import fontWeight from 'styli-plugin-font-weight'
import zIndex from 'styli-plugin-z-index'
import outline from 'styli-plugin-outline'
import cursor from 'styli-plugin-cursor'
import ellipsis from 'styli-plugin-ellipsis'
import debug from 'styli-plugin-debug'
import space from 'styli-plugin-space'
import visibility from 'styli-plugin-visibility'

export const plugins = [
  debug(),
  background(),
  border(),
  color(),
  display(),
  flexBox(),
  grid(),
  flexItem(),
  layoutEngine(),
  lineHeight(),
  margin(),
  opacity(),
  overflow(),
  padding(),
  position(),
  rounded(),
  shadow(),
  size(),
  textAlign(),
  textSize(),
  textTransform(),
  fontWeight(),
  zIndex(),
  cursor(),
  outline(),
  ellipsis(),
  space(),
  visibility(),
]
