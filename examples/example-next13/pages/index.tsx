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
    <Box gray100--dark>
      <Box gray800 red500>
        go
      </Box>
    </Box>
  )
}
