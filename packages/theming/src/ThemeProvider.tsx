import React, { FC } from 'react'
import { Theme } from './types'
import { themeContext } from './themeContext'

const { Provider } = themeContext

interface ThemeProviderProps {
  theme: Theme
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => {
  return <Provider value={theme}>{children}</Provider>
}
