import { createContext } from 'react'
import { Theme } from '@styli/core'

export const themeContext = createContext<Theme>({} as Theme)
