import React from 'react'
import { Box } from '@fower/react'
import { HomeHighLight } from './HomeHighLight'

const code = `<div toCenterY p3 w-240 bgWhite rounded2XL shadowMD>
  <img circle-48 src="/img/logo.png" />
  <div ml-10>
    <h2 textLeft textXL fontBold>
      Fower
    </h2>
    <span gray800>Atomic CSS in JS</span>
  </div>
</div>`

export function HomeDemo() {
  return (
    <div className="home-demo">
      <Box className="bgOrange100 roundedTopLarge toCenter flex" style={{ padding: 24 }}>
        <Box className="toCenterY  w-240 bgWhite rounded2XL shadowMD flex" style={{ padding: 16 }}>
          <img className="circle-48" src="/img/logo.png" />
          <Box className="ml-10">
            <Box className="textLeft textXL fontBold">Fower</Box>
            <Box className="gray800">Atomic CSS in JS</Box>
          </Box>
        </Box>
      </Box>
      <Box className="textLeft">
        <HomeHighLight code={code} lang="html"></HomeHighLight>
      </Box>
    </div>
  )
}
