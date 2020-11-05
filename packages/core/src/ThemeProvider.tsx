import React, { FC } from 'react'
import { themeContext } from './themeContext'
import { Theme } from './types'

const { Provider } = themeContext

interface Props {
  theme: Theme
}

export const ThemeProvider: FC<Props> = ({ children, theme }) => {
  return <Provider value={theme}>{children}</Provider>
}
