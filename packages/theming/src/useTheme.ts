import { useContext } from 'react'
import { Theme } from './types'
import { themeContext } from './themeContext'

export function useTheme(): Theme {
  return useContext(themeContext)
}
