import { Plugin, Config, Preset } from './types'

class Styli {
  config: Config = {
    unit: 'px',
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
