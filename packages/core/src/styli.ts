import { presetColors, IColors } from './constants/colors'
import { ConvertConfig } from './utils/convertConfigs'
import { ModifierType } from './types/Modifiers'

interface Configs {
  transformUnit?: (value: number | string, modifierType?: ModifierType) => string
  convertConfig?: ConvertConfig[]
}

class StyliFactory {
  unit: string = ''

  Colors: IColors = presetColors

  configs: Configs = {}

  config = (c: Configs) => {
    this.configs = c
  }

  configColors = (colors: Partial<IColors>) => {
    this.Colors = {
      ...presetColors,
      ...colors,
    }
  }

  setUnit = (unit: string) => {
    this.unit = unit
  }
}

export const Styli = new StyliFactory()

export const Colors = Styli.Colors

export const configColors = Styli.configColors
