import { presetColors, IColors } from './constants/colors'
import { ModifierType } from './types/Modifiers'
import { mergeWithDefaultOptions } from './utils'
import { Plugin } from './types'
import { pluginSize, pluginMargin, pluginPadding, pluginBg, pluginCss } from './plugins'

interface Configs {
  unit: string
  canUseDom: boolean
  colors: Partial<IColors>
  plugins: Plugin[]
  breakpoints: number[]
  transformUnit: (value: number | string, modifierType?: ModifierType) => string
}

export class StyliFactory {
  private configs: Configs = {
    unit: 'px',
    colors: presetColors,
    canUseDom: !!window && !!window?.document?.createElement,
    plugins: [pluginSize(), pluginMargin(), pluginPadding(), pluginBg(), pluginCss()],
    breakpoints: [0, 640, 768, 1024, 1280],
    transformUnit: (value) => value + (this.getConfig('unit') as string),
  }

  config(config: Partial<Configs>) {
    this.configs = mergeWithDefaultOptions(config, this.configs)
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
