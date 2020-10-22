import { presetColors, IColors } from './constants/colors'
import { ConvertConfig } from './utils/convertConfigs'
import { ModifierType } from './types/Modifiers'
import { canUseDom, mergeWithDefaultOptions } from './utils'
import { Plugin } from './types'
import { toCss, toStyle } from './plugins'

interface Configs {
  unit: string
  colors: Partial<IColors>
  plugins: Plugin[]
  convertConfig: ConvertConfig[]
  transformUnit: (value: number | string, modifierType?: ModifierType) => string
}

export class StyliFactory {
  private configs: Configs = {
    unit: 'px',
    colors: presetColors,
    convertConfig: [],
    plugins: [canUseDom ? toCss : toStyle],
    transformUnit: (value) => value + (this.getConfig('unit') as string),
  }

  config(config: Partial<Configs>) {
    this.configs = mergeWithDefaultOptions(config, this.configs)
  }

  getConfigs(): Configs {
    return this.configs
  }

  getConfig(type: keyof Configs) {
    return this.configs[type]
  }
}

export const Styli = new StyliFactory()
