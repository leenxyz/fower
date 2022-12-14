import { Box } from '@fower/react'
import { setConfig } from '@fower/core'

setConfig({
  mode: {
    autoDarkMode: {
      enabled: true,
    },
  },
})

export default function Home() {
  return (
    <Box bgRed300--T20 bgGray900--dark>
      xxx
    </Box>
  )
  return (
    <Box>
      <Box black>xxxxx</Box>

      <Box black black--hover bgRed200 bgGreen200>
        aa
      </Box>
    </Box>
  )
  return (
    <Box gray100--dark>
      <Box gray800 red500 green600--hover>
        go
      </Box>
    </Box>
  )
}
