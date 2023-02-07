import React from 'react'
import { Box } from '@fower/react'
import { setConfig } from '@fower/core'
import { useState } from 'react'

setConfig({
  mode: {
    modeList: [
      'red', // red mode
      'blue', // red mode
      'large', // large text mode
    ],
  },
})

export const Modes = () => {
  const [mode, setMode] = useState('default')
  function toggleMode(mode: string) {
    setMode(mode)
    document.documentElement.classList.add(mode)
    const modes = ['default', 'red', 'blue', 'large']
    document.documentElement.classList.remove(...modes.filter((i) => i !== mode))
  }
  return (
    <Box h-200 roundedLG p4 column toCenter spaceY3>
      <Box text2XL red400--red blue400--blue text6XL--large>
        Multiple theme mode
      </Box>
      <Box toCenter spaceX2>
        <Box as="label" toCenter>
          <input
            type="radio"
            name="mode"
            defaultChecked={mode === 'default'}
            onClick={() => toggleMode('default')}
          />
          Default
        </Box>
        <Box as="label" toCenter>
          <input type="radio" name="mode" onClick={() => toggleMode('red')} />
          Red
        </Box>
        <Box as="label" toCenter>
          <input type="radio" name="mode" onClick={() => toggleMode('blue')} />
          Blue
        </Box>
        <Box as="label" toCenter>
          <input type="radio" name="mode" onClick={() => toggleMode('large')} />
          Large text
        </Box>
      </Box>
    </Box>
  )
}
