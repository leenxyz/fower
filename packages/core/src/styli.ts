import { Plugin, Config, Preset } from './types'
import paddingPlugin from '../src/plugins/styli-plugin-padding'
import colorPlugin from '../src/plugins/styli-plugin-color'
import bgPlugin from '../src/plugins/styli-plugin-bg'
import alignmentPlugin from '../src/plugins/styli-plugin-alignment'
import displayPlugin from '../src/plugins/styli-plugin-display'
import lineHeightPlugin from '../src/plugins/styli-plugin-line-height'
import positionPlugin from '../src/plugins/styli-plugin-position'
import textHeadingPlugin from '../src/plugins/styli-plugin-text-heading'
import flexItemPlugin from '../src/plugins/styli-plugin-flex-item'
import marginPlugin from '../src/plugins/styli-plugin-margin'
import roundedPlugin from '../src/plugins/styli-plugin-rounded'
import textSizePlugin from '../src/plugins/styli-plugin-text-size'
import borderPlugin from '../src/plugins/styli-plugin-border'
import flexboxPlugin from '../src/plugins/styli-plugin-flexbox'
import opacityPlugin from '../src/plugins/styli-plugin-opacity'
import shadowPlugin from '../src/plugins/styli-plugin-shadow'
import textWeightPlugin from '../src/plugins/styli-plugin-text-weight'
import headingPlugin from '../src/plugins/styli-plugin-heading'
import overflowPlugin from '../src/plugins/styli-plugin-overflow'
import sizePlugin from '../src/plugins/styli-plugin-size'
import zIndexPlugin from '../src/plugins/styli-plugin-z-index'

class Styli {
  config: Config = {
    unit: 'px',
    plugins: [],
    theme: {
      colors: {},
    },
    transformUnit: (value) => value + (this.getConfig('unit') as string),
  }

  setup(preset: Preset) {
    console.log('preset:', preset)
    this.config = {
      ...this.config,
      ...preset,
    }

    this.config.plugins = [
      paddingPlugin(),
      colorPlugin(),
      bgPlugin(),
      alignmentPlugin(),
      displayPlugin(),
      lineHeightPlugin(),
      positionPlugin(),
      textHeadingPlugin(),
      flexItemPlugin(),
      marginPlugin(),
      roundedPlugin(),
      textSizePlugin(),
      borderPlugin(),
      flexboxPlugin(),
      opacityPlugin(),
      shadowPlugin(),
      textWeightPlugin(),
      headingPlugin(),
      overflowPlugin(),
      sizePlugin(),
      zIndexPlugin(),
      ...this.config.plugins,
    ]
  }

  getTheme<T = any>(themeKey: string): T {
    return this.config.theme[themeKey]
  }

  getColors() {
    return styli.config.theme.colors || {}
  }

  getConfig<T = any>(type?: keyof Config): T {
    if (!type) return this.config as any
    return this.config[type] as any
  }

  use(...plugins: Plugin[]) {
    return plugins
  }
}

export const styli = new Styli()
