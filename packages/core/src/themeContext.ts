import { createContext } from 'react'
import { Theme } from './types'

export const themeContext = createContext<Theme>({} as Theme)
