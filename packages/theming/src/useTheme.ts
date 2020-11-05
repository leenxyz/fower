import { useContext } from 'react'
import { Theme } from '@styli/core'
import { themeContext } from './themeContext'

export function useTheme(): Theme {
  return useContext(themeContext)
}
