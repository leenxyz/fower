import { Box } from '@fower/react'
import React, { useState } from 'react'

export function DarkModeToggle() {
  const [mode, setMode] = useState('Light')
  function toggleMode() {
    if (mode === 'Dark') {
      setMode('Light')
      document.documentElement.classList.remove('dark')
    } else {
      setMode('Dark')
      document.documentElement.classList.add('dark')
    }
  }
  return (
    <Box
      as="button"
      onClick={toggleMode}
      p3
      cursorPointer
      outlineNone
      roundedFull
      bgYellow100
      yellow800
      bgBlue500--dark
      blue100--dark
      toCenter
    >
      <Box>Toggle mode</Box>
      {mode === 'Dark' && '🌞'}
      {mode === 'Light' && '🌜'}
    </Box>
  )
}
