import React from 'react'
import { renderRoutes } from 'react-router-config'
import { Link } from 'react-router-dom'
import { Box } from '@fower/react'
import { styled } from '@fower/styled'

const Anchor = styled(Link)

const App = (props) => {
  return (
    <Box>
      <Anchor mr-30 to="/">
        Home
      </Anchor>
      <Anchor to="/404">Not Found</Anchor>
      {renderRoutes(props.route.routes)}
    </Box>
  )
}

export default App
