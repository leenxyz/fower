import { createContext } from 'react'
import { Theme } from '@styli/types'

export const themeContext = createContext<Theme>({} as Theme)
