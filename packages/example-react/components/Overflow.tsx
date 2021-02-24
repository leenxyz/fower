import React from 'react'
import { Box } from '@styli/react'

export const Overflow = () => {
  return (
    <Box>
      <Box f-30 fontBold as="h1">
        OutLine
      </Box>
      <Box debug overflow="hidden">
        overflow
      </Box>
    </Box>
  )
}
