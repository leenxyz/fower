import { useContext } from 'react'
import { themeContext } from './themeContext'
import { Theme } from './types'

export function useTheme(): Theme {
  return useContext(themeContext)
}
