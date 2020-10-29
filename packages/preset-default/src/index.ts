import background from 'styli-plugin-background'
import border from 'styli-plugin-border'
import color from 'styli-plugin-color'
import display from 'styli-plugin-display'
import flexItem from 'styli-plugin-flex-item'
import flexbox from 'styli-plugin-flexbox'
import layoutEngine from 'styli-plugin-layout-engine'
import lineHeight from 'styli-plugin-line-height'
import margin from 'styli-plugin-margin'
import opacity from 'styli-plugin-opacity'
import overflow from 'styli-plugin-overflow'
import padding from 'styli-plugin-padding'
import position from 'styli-plugin-position'
import rounded from 'styli-plugin-rounded'
import shodow from 'styli-plugin-shodow'
import size from 'styli-plugin-size'
import textAlign from 'styli-plugin-text-align'
import textHeading from 'styli-plugin-text-heading'
import textSize from 'styli-plugin-text-size'
import textTransform from 'styli-plugin-text-transform'
import textWeight from 'styli-plugin-text-weight'
import zIndex from 'styli-plugin-z-index'

import { colors } from './colors'

export const presetDefault: any = {
  plugins: [
    background(),
    border(),
    color(),
    display(),
    flexItem(),
    flexbox(),
    layoutEngine(),
    lineHeight(),
    margin(),
    opacity(),
    overflow(),
    padding(),
    position(),
    rounded(),
    shodow(),
    size(),
    textAlign(),
    textHeading(),
    textSize(),
    textTransform(),
    textWeight(),
    zIndex(),
  ],
  unit: 'px',
  theme: {
    colors,
  },
}

export default presetDefault
