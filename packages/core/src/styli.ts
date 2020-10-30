import { Plugin, Config, Preset } from './types'

class Styli {
  config: Config = {
    unit: 'px',
    plugins: [],
    theme: {
      colors: {},
    },
    transformUnit: (value: any) => value + (this.getConfig('unit') as string),
  }

  setup(preset: Preset) {
    this.config = {
      ...this.config,
      ...preset,
    }
  }

  getTheme<T = any>(themeKey: string): T {
    return this.config.theme[themeKey]
  }

  getColors = () => {
    return this.config.theme.colors || {}
  }

  getConfig<T = any>(type?: keyof Config): T {
    if (!type) return this.config as any
    return this.config[type] as any
  }

  use = (...plugins: Plugin[]) => {
    this.config.plugins.push(...plugins)
  }
}

export const styli = new Styli()
