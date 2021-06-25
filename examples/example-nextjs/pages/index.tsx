import { Box } from '@fower/react'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Box p10>
        <Box bgOrange300 p10 rounded3XL>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Box>

        <Box bgRed200 p4 square-200>
          foo
        </Box>

        <Box bgRed200 p4 bgGreen100 square-300>
          foo
        </Box>

        <Box bgRed200 p4 gray300>
          bar
        </Box>
      </Box>
    </div>
  )
}
