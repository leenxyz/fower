import { Box, useMode } from '@fower/react'
import React from 'react'

export function DarkModeToggle() {
  const { mode, setMode } = useMode()

  function toggleMode() {
    setMode(mode === 'dark' ? 'light' : 'dark')
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
      {mode === 'dark' && '🌞'}
      {mode === 'light' && '🌜'}
    </Box>
  )
}
