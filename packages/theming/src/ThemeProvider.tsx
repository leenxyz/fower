import React, { FC } from 'react'
import { Theme } from '@styli/core'
import { themeContext } from './themeContext'

const { Provider } = themeContext

interface Props {
  theme: Theme
}

export const ThemeProvider: FC<Props> = ({ children, theme }) => {
  return <Provider value={theme}>{children}</Provider>
}
