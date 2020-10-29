<<<<<<< HEAD
import { Plugin, Config, Preset } from './types'
=======
import { presetColors, IColors } from './constants/colors'
import { ModifierType } from './types/Modifiers'
import { mergeWithDefaultOptions } from './utils'
import { Plugin } from './types'
import {
  pluginSize,
  pluginMargin,
  pluginPadding,
  pluginBg,
  pluginCss,
  pluginColor,
  pluginFlexItem,
  pluginBorder,
  pluginDisplay,
  pluginAlignment,
  pluginBoxShadow,
  pluginFlexBox,
  pluginLineHeight,
  pluginOpacity,
  pluginOverFlow,
  pluginPosition,
  pluginRound,
  pluginTextAlign,
  pluginTextHeading,
  pluginTextSize,
  pluginTextWeight,
  pluginZIndex,
} from './plugins'
>>>>>>> toStyle

class Styli {
  config: Config = {
    unit: 'px',
<<<<<<< HEAD
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
=======
    colors: presetColors,
    canUseDom: !!window && !!window?.document?.createElement,
    plugins: [
      pluginCss(),
      pluginSize(),
      pluginMargin(),
      pluginPadding(),
      pluginBg(),
      pluginColor(),
      pluginFlexItem(),
      pluginBorder(),
      pluginDisplay(),
      pluginAlignment(),
      pluginBoxShadow(),
      pluginFlexBox(),
      pluginLineHeight(),
      pluginOpacity(),
      pluginOverFlow(),
      pluginPosition(),
      pluginRound(),
      pluginTextAlign(),
      pluginTextHeading(),
      pluginTextSize(),
      pluginTextWeight(),
      pluginZIndex(),
    ],
    breakpoints: [0, 640, 768, 1024, 1280],
    transformUnit: (value) => value + (this.getConfig('unit') as string),
  }

  config(config: Partial<Configs>) {
    this.configs = mergeWithDefaultOptions(config, this.configs)
>>>>>>> toStyle
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
