import React, { useEffect } from 'react'
import { Box } from '@fower/react'

export const NotFound = ({ staticContext }) => {
  useEffect(() => {
    staticContext && (staticContext.NotFound = true)
  }, [])

  return (
    <Box square200 fontBold bgGreen500 text5XL red500 toCenter>
      404
    </Box>
  )
}
