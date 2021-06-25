import express from 'express'
import React from 'react'
import { Box, getAtomIds, getCssString } from '@fower/react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../routes'

const app = express()

app.use(express.static('public'))

app.get('*', function (req, res) {
  let context = {}

  const html = renderToString(
    <StaticRouter location={req.path} context={context}>
      <div>{renderRoutes(routes)}</div>
    </StaticRouter>,
  )

  if (context.action === 'REPLACE') {
    res.redirect(301, context.url)
    return
  }
  if (context.NotFound) {
    res.status(404)
  }
  res.send(`
    <html>
      <head>
        <title>测试</title>
        <style data-fower="${getAtomIds()}">${getCssString()}</style>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `)
})

app.listen(3000, function () {
  console.log('服务已开启')
})
