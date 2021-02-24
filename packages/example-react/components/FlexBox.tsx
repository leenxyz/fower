import React from 'react'
import { Box } from '@styli/react'

export const FlexBox = () => {
  console.log('ahah----')
  return (
    <Box>
      <Box>FlexBox</Box>
      <Box h-200 f-12 debugChildren row justifyBetween itemsEnd>
        <Box s-100>AAA</Box>
        <Box selfStretch>BBB</Box>
        <Box s-100 center>
          CCC
        </Box>
      </Box>
      <Box>Flex item</Box>
      <Box>
        <Box flexAuto>Auto1</Box>
        <Box flexInitial>flexInitial</Box>
      </Box>
    </Box>
  )
}
