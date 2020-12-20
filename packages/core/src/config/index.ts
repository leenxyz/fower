import { StyliPlugin, Configuration, Theme } from '@styli/types'

export const defaultConfig: Configuration = {
  unit: 'px',
  inline: false,
  plugins: [] as StyliPlugin[],
  theme: {} as Theme,
}
