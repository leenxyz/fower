import { Box } from '@fower/react'
import { css, isAtomicArgsValid } from '@fower/core'
import { ClientOnly } from './ClientOnly'

export default function App() {
  return (
    <ClientOnly>
      <Box
        className="bgRed500 flex"
        style={{ background: '#ddd', display: 'inline-flex' }}
        // p4
        // bgGreen100
        // inlineFlex
        // p={[100, 200]}
        css={{
          columnCount: [2, 4],
          // fontBold: '800',
          // fontSize: 30,
          // p: [10, 40, 100],
          m: 0,
          // padding: [10, 40, 100],
          borderSpacing: [1],
          // borderRightStyle: [10],
          margin: 30,
          // '.hello': {
          //   fontSize: 80,
          //   p: [20, 60, 120],
          //   color: ['red500', 'yellow500', 'blue500'],
          // },
        }}
      >
        <div className="hello" style={{ background: 'green', display: 'inline-flex' }}>
          Hello world
        </div>
        <div>Hello world</div>
      </Box>
    </ClientOnly>
  )
  return (
    <Box>
      <Box>
        <Box
          as="span"
          fontBold={() => true}
          text6XL
          transparent
          bgClipText
          bgGradientX={['green400', 'blue600']}
        >
          Hello world
        </Box>
        <Box textXL bgClipBorder>
          Hello world!
        </Box>
        <Box textXL bgClipContent>
          Hello world!
        </Box>
      </Box>
      <Box text3XL fontBold>
        Background
      </Box>

      <Box textXL bgBrand500 bgBrand100--hover white>
        bgBrand
      </Box>

      <Box textXL bgBrand100>
        bgBrand100
      </Box>

      <Box textXL bgBrand200>
        bgBrand200
      </Box>

      <Box textXL bgLime400>
        bgLime400
      </Box>

      <Box textXL bgRed500>
        BgRed50
      </Box>

      <Box textXL bgRed500--T20>
        BgRed50--T20
      </Box>

      <Box textXL bgRed500--T20 bgRed500--D20--hover>
        BgRed500--D20--hover
      </Box>

      <Box textXL bgRed500--T30 bgRed500--D30--hover={false}>
        BgRed50--D30--hover=false
      </Box>

      <Box textXL bg="#000--T40">
        bg #000--T40
      </Box>

      <Box textXL bg="rgba(1,1,1,0.1)--O40">
        bgColor rgba(1,1,1,0.1)--O40
      </Box>

      <Box textXL bgRed500 bgGreen500--hover>
        bgGreen500--hover
      </Box>

      <Box textXL bg="green300">
        bg="green300"
      </Box>

      <Box textXL bg="green300--D20">
        bg="green300--D20"
      </Box>

      <Box textXL white--hover bg="#000--L20" bg--hover="#000">
        bg--hover="#000"
      </Box>

      <Box textXL white--hover bg="#000--L20" bg--hover="#000">
        bg--hover="#000"
      </Box>
    </Box>
  )
}

const a = [
  [
    {
      p: 1,
    },
  ],
  [
    '.hello',
    {
      color: 'red500',
    },
  ],
  [
    '.hello',
    {
      fontSize: 20,
    },
  ],
]
