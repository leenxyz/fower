import express from 'express'
import React from 'react'
import { styleSheet } from '@fower/sheet'
import { Box } from '@fower/react'
import { store } from '@fower/store'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from '../routes'

const app = express()

app.use(express.static('public'))

app.get('*', function (req, res) {
  let context = {}

  const content = renderToString(
    <StaticRouter location={req.path} context={context}>
      <div>{renderRoutes(routes)}</div>
    </StaticRouter>,
  )

  const html = `
    <html>
      <head>
        <title>测试</title>
        <style data-fower="fower">${styleSheet.getStyle()}</style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.fower = {
            atomCache: ${JSON.stringify([...store.atomCache])}
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `

  if (context.action === 'REPLACE') {
    res.redirect(301, context.url)
    return
  }
  if (context.NotFound) {
    res.status(404)
  }
  res.send(html)
})

app.listen(3000, function () {
  console.log('服务已开启')
})
