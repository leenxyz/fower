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
    <Box bgGray100 black>
      foooooo
    </Box>
  )

  return (
    <Box mb-40 text7XL text6XL--sm text9XL--md fontBlack textCenter leading="1.2em">
      <Box inlineFlex bgGradientX={['green500', 'blue500']} bgClipText transparent>
        foo
      </Box>

      <Box bgGradientX={['blue500', 'purple500']} bgClipText transparent>
        bar
      </Box>
    </Box>
  )
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
