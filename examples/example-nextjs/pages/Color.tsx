import { Box } from '@fower/react'

export default function App() {
  return (
    <Box style={{ padding: 100, background: 'black' }}>
      <Box
        style={{
          padding: 100,
        }}
        border
        borderGray100
        // borderGray800--dark
      >
        FOOO
      </Box>
    </Box>
  )
  return (
    <Box>
      <Box text3XL fontBold>
        Color
      </Box>
      <Box textXL red500>
        Red500
      </Box>
      <Box textXL red500>
        Red500
      </Box>
      <Box textXL red500--L30>
        Red500--L30
      </Box>
      <Box textXL green400>
        Green400
      </Box>
      <Box textXL color="yellowgreen">
        yellowgreen
      </Box>
      <Box textXL color="#000">
        #000
      </Box>
      <Box textXL color="#000--T50">
        #000--T50
      </Box>
      <Box textXL color="#666--D20">
        #666--D20
      </Box>
      <Box textXL color="#666--L40">
        color="#666--L40"
      </Box>
      <Box textXL color="green400">
        color="green400"
      </Box>
      <Box textXL color="green400--T40">
        color="green400--T40"
      </Box>
      <Box textXL red500 green500--hover>
        green500--hover
      </Box>
      <Box textXL red500 green500--T20--hover>
        green500--T20--hover
      </Box>
      <Box textXL red500 green500--D20--hover>
        green500--D20--hover
      </Box>
      <Box textXL color="#000" color--hover="#000--T50">
        #000--hover
      </Box>
      <Box textXL red500 green500--active>
        green500--active
      </Box>
      <Box textXL trueGray500>
        trueGray500
      </Box>
    </Box>
  )
}
