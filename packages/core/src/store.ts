import deepmerge from 'deepmerge'
import { isBrowser } from '@fower/utils'
import { FowerPlugin, Configuration, Theme, CSSObject, ModeType } from './typings'
import type { Atom } from './atom'

type Strategy = 'replace' | 'merge' | 'deepmerge'

export type PartialThemeConfig = Theme | { [key: string]: any }
export type PartialConfig = Configuration | { [key: string]: any }

const modeCacheKey = 'fower-mode'

export class Store {
  config = {
    unit: 'px',
    objectPropKeys: ['css'],
    inline: false,
    important: false,
    mode: {
      currentMode: 'light',
      autoDarkMode: {
        enabled: false,
        mappings: {
          white: 'black',
          black: 'white',
          '50': '900',
          '100': '800',
          '200': '700',
          '300': '600',
          '400': '500',
          '500': '400',
          '600': '300',
          '700': '200',
          '800': '100',
          '900': '50',
        },
      },
      modeList: ['light', 'dark'],
      classPrefix: '',
    },
    prefix: '',
    pseudos: [
      'active',
      'checked',
      'disabled',
      'enabled',
      'default',
      'empty',
      'focus',
      'focus-within',
      'invalid',
      'hover',
      'link',
      'visited',
      'first-child',
      'last-child',
      'after',
      'before',
      'placeholder',
      'selection',
    ],
    theme: {
      breakpoints: {},
    } as Theme,
    plugins: [],
  } as Configuration

  atomCache = new Map<string, Atom>()

  getAtomIds = () => {
    return Array.from(this.atomCache.keys())
  }

  // composed atomic props
  compositions = new Map<string, any>()

  get theme() {
    return this.config.theme
  }

  getConfig = () => {
    return this.config
  }

  // user config
  setConfig = (config: PartialConfig, strategy: Strategy = 'deepmerge') => {
    if (strategy === 'replace') {
      this.config = config as Configuration
    } else if (strategy === 'merge') {
      this.config = { ...this.config, ...config } as any
    } else {
      this.config = deepmerge(this.config, config) as any
      // TODO: need improve, 这个是特殊的
      if (config.objectPropKeys) {
        this.config.objectPropKeys = config.objectPropKeys
      }
    }
  }

  getTheme = (): Theme => {
    return this.config.theme
  }

  setTheme = (partialThemeConfig: PartialThemeConfig) => {
    this.config.theme = deepmerge(this.config.theme || {}, partialThemeConfig) as any
  }

  getMode = (): string => {
    return this.config.mode?.currentMode || ''
  }

  setMode = (mode: ModeType) => {
    if (!isBrowser) return
    const { currentMode } = this.config.mode
    if (currentMode) {
      document.documentElement.classList.remove(currentMode)
    }
    if (mode) {
      document.documentElement.classList.add(mode)
    }

    localStorage.setItem(modeCacheKey, mode)

    this.setConfig({ mode: { currentMode: mode } })
  }

  use = (...plugins: FowerPlugin[]) => {
    this.config.plugins.push(...plugins)
  }

  addAtom = (
    matcher: string | RegExp,
    handleAtomOrStyleObject: FowerPlugin['handleAtom'] | CSSObject,
  ): FowerPlugin => {
    const plugin: FowerPlugin = {
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

  composeAtom = (atomName: string, cssObject: CSSObject) => {
    this.compositions.set(atomName, cssObject)
  }
}

export const store = new Store()
