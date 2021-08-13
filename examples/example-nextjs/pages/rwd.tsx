import { Box } from '@fower/react'
import React from 'react'

export default function RWD() {
  console.log('objecgogot')
  return (
    <Box p20>
      {/* <div className="css-1678086666 textSM textXL--sm text4XL--md text8XL--lg r-sm r-md lg">
        Text
      </div> */}

      <Box p10 bgRed200 textSM textXL--sm text4XL--md text8XL--lg text9XL--xl>
        Text
      </Box>
    </Box>
  )
}
