import React from 'react'
import { Box } from '@styli/react'

export const Grid = () => {
  return (
    <Box>
      <Box f-30 fontBold as="h1">
        Grid
      </Box>
      <Box debugChildren grid gridTemplateColumns-4 rowGap-30 columnGap-10>
        <Box>A</Box>
        <Box>B</Box>
        <Box>C</Box>
        <Box>D</Box>
        <Box>F</Box>
        <Box>G</Box>
      </Box>
    </Box>
  )
}