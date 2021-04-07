import { deepmerge } from '@styli/utils'
import { StyliPlugin, Configuration, Theme, CSSObject } from '@styli/types'
import { PartialDeep } from 'type-fest'
import { SetThemeParams } from './types'

type Strategy = 'replace' | 'merge' | 'deepmerge'

class Styli {
  config = {
    unit: 'px',
    inline: false,
    prefix: '',
    pseudos: [],
    theme: {
      breakpoints: {},
      modes: [] as string[],
    } as Theme,
    plugins: [],
  } as Configuration

  // user config
  configure = (config: PartialDeep<Configuration>, strategy: Strategy = 'deepmerge') => {
    if (strategy === 'replace') {
      this.config = config as Configuration
    } else if (strategy === 'merge') {
      this.config = { ...this.config, ...config } as any
    } else {
      this.config = deepmerge(this.config, config) as any
    }
  }

  getTheme = (): Theme => {
    return this.config.theme
  }

  setTheme = (partialThemeConfig: PartialDeep<SetThemeParams>) => {
    this.config.theme = deepmerge(this.config.theme || {}, partialThemeConfig) as any
  }

  getColors = () => {
    return this.getTheme().colors
  }

  use = (...plugins: StyliPlugin[]) => {
    this.config.plugins.push(...plugins)
  }

  registerAtomicProps = (
    matcher: string | RegExp,
    handleAtomOrStyleObject: StyliPlugin['handleAtom'] | CSSObject,
  ): StyliPlugin => {
    const plugin: StyliPlugin = {
      isMatch(key: string) {
        if (typeof matcher === 'string') return key === matcher
        if (matcher instanceof RegExp) return matcher.test(key)
        return false
      },
      handleAtom:
        typeof handleAtomOrStyleObject === 'function'
          ? handleAtomOrStyleObject
          : (atom) => {
              atom.style = handleAtomOrStyleObject as any
              return atom
            },
    }
    this.use(plugin)
    return plugin
  }
}

export const styli = new Styli()
