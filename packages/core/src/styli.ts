import { presetColors, IColors } from './colors'
import { ModifierType } from './types'

interface Configs {
  transformUnit?: (value: number | string, modifierType?: ModifierType) => string
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
