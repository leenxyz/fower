import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import routes from '../routes'
import { renderRoutes } from 'react-router-config'
import { Box } from '@fower/react'

const App = () => {
  return (
    <BrowserRouter>
      <Box>{renderRoutes(routes)}</Box>
    </BrowserRouter>
  )
}

ReactDom.hydrate(<App />, document.getElementById('root'))
