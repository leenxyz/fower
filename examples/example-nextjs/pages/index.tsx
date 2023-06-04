import { Box } from '@fower/react'
import { DarkModeToggle } from '../components/DarkModeToggle'
import { Colors } from '../components/Colors'

declare module '@fower/atomic-props' {
  export interface AtomicProps {
    foo?: string
  }
}

export default function Home() {
  return (
    <Box bgGreen200 toCenterX gapX={[30, 50, 60, 100, 200]}>
      <Box gray800 red500 green600--hover>
        AA
      </Box>
      <Box gray800 red500 green600--hover>
        BB
      </Box>
    </Box>
  )

  // return (
  //   <Box p10 bgWhite black white--dark--hover>
  //     fooo
  //   </Box>
  // )

  // return (
  //   <Box bgGray100 black>
  //     foooooo
  //   </Box>
  // )

  // return (
  //   <Box mb-40 text7XL text6XL--sm text9XL--md fontBlack textCenter leading="1.2em">
  //     <Box inlineFlex bgGradientX={['green500', 'blue500']} bgClipText transparent>
  //       foo
  //     </Box>

  //     <Box bgGradientX={['blue500', 'purple500']} bgClipText transparent>
  //       bar
  //     </Box>
  //   </Box>
  // )
  // return (
  //   <Box black bgRed300--T20 bgGray900--dark>
  //     xxx
  //   </Box>
  // )
  return (
    <Box
      bgWhite
      css={{
        '*': {
          transitionCommon: true,
        },
      }}
    >
      <Box w-1000 mx-auto>
        <Box p10>
          <DarkModeToggle></DarkModeToggle>
          <Box column toLeft spaceY4 mb10 mt4>
            <Box text4XL fontBold brand500>
              Auto Dark Mode
            </Box>
            <Box text2XL w-80p gray600>
              A cool feature of Fower is "
              <Box as="span" pink500 fontSemibold>
                Auto dark mode
              </Box>
              ". When "Auto dark mode" is enabled, you can achieve "Dark mode" without writing a
              line of code.
            </Box>
          </Box>

          <Colors />
        </Box>
      </Box>
    </Box>
  )
}
