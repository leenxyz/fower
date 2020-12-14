import { StyliPlugin, Configuration, Theme } from '@styli/types'

export const defaultConfig: Configuration = {
  dev: false,
  unit: 'px',
  inline: false,
  plugins: [] as StyliPlugin[],
  theme: {} as Theme,
}
