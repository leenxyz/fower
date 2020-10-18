import { presetColors, IColors } from './constants/colors'
import { ConvertConfig } from './utils/convertConfigs'
import { ModifierType } from './types/Modifiers'
import { mergeWithDefaultOptions } from './utils'
import { Plugin } from './types'

interface Configs {
  unit: string
  colors: Partial<IColors>
  plugins: Plugin[]
  convertConfig: ConvertConfig[]
  transformUnit: (value: number | string, modifierType?: ModifierType) => string
}

class StyliFactory {
  private configs: Configs = {
    unit: 'px',
    colors: presetColors,
    convertConfig: [],
    plugins: [],
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
