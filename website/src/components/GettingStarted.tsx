import React from 'react'
import { Box } from '@styli/react'

export const GettingStarted = () => {
  return (
    <Box toCenter bgGray200 h-200 mb-10>
      <Box toCenterY p-10 w-260 bgWhite rounded-10>
        <Box as="img" circle-48 src="/img/jobs.jpg" />
        <Box ml-10>
          <Box textXL>Steve Jobs</Box>
          <Box gray800>Co-founder of Apple Inc.</Box>
        </Box>
      </Box>
    </Box>
  )
}
