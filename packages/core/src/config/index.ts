import { StyliPlugin, Configuration, Theme } from '@styli/types'

export const defaultConfig: Configuration = {
  unit: 'px',
  inline: false,
  plugins: [] as StyliPlugin[],
  theme: {} as Theme,
  transformUnit(value: string | number) {
    return '' + value + this.unit
  },
}
