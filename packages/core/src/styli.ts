import { presetColors, IColors } from './constants/colors'
import { ConvertConfig } from './utils/convertConfigs'
import { ModifierType } from './types/Modifiers'

interface Configs {
  unit: string
  colors: Partial<IColors>
  transformUnit?: (value: number | string, modifierType?: ModifierType) => string
  convertConfig?: ConvertConfig[]
}

class StyliFactory {
  private configs: Configs = {
    unit: 'px', // set default unit
    colors: presetColors, // set default color
  }

  config(config: Partial<Configs>) {
    const { colors } = config || {}
    this.configs = {
      ...this.configs,
      ...config,
      colors: {
        ...presetColors,
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
