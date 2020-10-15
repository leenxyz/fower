import { presetColors, IColors } from './constants/colors'
import { ConvertConfig } from './utils/convertConfigs'
import { ModifierType } from './types/Modifiers'

interface Configs {
  unit: string
  colors: Partial<IColors>
  convertConfig: ConvertConfig[]
  transformUnit?: (value: number | string, modifierType?: ModifierType) => string
}

class StyliFactory {
  private configs: Configs = {
    unit: 'px', // set default unit
    colors: presetColors, // set default color
    convertConfig: [],
  }

  config(config: Partial<Configs>) {
    const { colors, convertConfig = [] } = config || {}
    this.configs = {
      ...this.configs,
      ...config,
      convertConfig: [...this.configs.convertConfig, ...convertConfig],
      colors: {
        ...this.configs.colors,
        ...colors,
      },
    }
  }

  getConfigs(): Configs {
    return this.configs
  }

  getConfig(type: keyof Configs) {
    return this.configs[type]
  }
}

export const Styli = new StyliFactory()
