import { presetColors, IColors } from './constants/colors'
import { ModifierType } from './types/Modifiers'
import { mergeWithDefaultOptions } from './utils'
import { Plugin } from './types'
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

interface Configs {
  unit: string
  colors: Partial<IColors>
  plugins: Plugin[]
  transformUnit: (value: number | string, modifierType?: ModifierType) => string
}

export class StyliFactory {
  private configs: Configs = {
    unit: 'px',
    colors: presetColors,
    plugins: [
      sizePlugin(),
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
      zIndexPlugin(),
    ],
    transformUnit: (value) => value + (this.getConfig('unit') as string),
  }

  config(config: Partial<Configs>) {
    // TODO: config improve
    this.configs = {
      ...mergeWithDefaultOptions(config, this.configs),
    }
  }

  getConfigs(): Configs {
    return this.configs
  }

  getConfig<T>(type: keyof Configs): T {
    return this.configs[type] as T
  }

  use(...plugins: Plugin[]) {
    return plugins
  }
}

export const Styli = new StyliFactory()
