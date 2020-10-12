import { presetColors, IColors } from './colors'
import { ConvertConfig } from './convertConfigs'
import { ModifierType } from './types/Modifiers'

interface Configs {
  transformUnit?: (value: number | string, modifierType?: ModifierType) => string
  ConvertConfig?: ConvertConfig[]
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
