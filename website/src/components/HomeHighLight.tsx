import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
// import theme from 'prism-react-renderer/themes/dracula'
// import theme from 'prism-react-renderer/themes/vsDark'
import theme from 'prism-react-renderer/themes/palenight'
import { Box } from '@fower/react'

export const HomeHighLight = ({ code, lang = 'jsx' }) => {
  return (
    <Highlight {...defaultProps} theme={theme} code={code} language={lang}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, height: '100%' }}>
          {tokens.map((line, i) => (
            <Box key={i} toLeft>
              <Box
                bg="#292c3e--D2"
                px2
                w10
                mr5
                textRight
                pt4={i == 0}
                pb4={i === tokens.length - 1}
              >
                {i + 1}
              </Box>
              <Box
                {...getLineProps({ line, key: i })}
                mr5
                pt4={i == 0}
                pb4={i === tokens.length - 1}
              >
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </Box>
            </Box>
          ))}
        </pre>
      )}
    </Highlight>
  )
}
