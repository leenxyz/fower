import { Box } from '@fower/react'
import React from 'react'
import { DarkModeToggle } from '../components/DarkModeToggle'
import { Colors } from '../components/Colors'

export default function Home() {
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
