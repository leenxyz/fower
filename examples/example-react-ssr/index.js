import express from 'express'
import React from 'react'
import { Box } from '@fower/react'
import { atomCache } from '@fower/parser'
import { styleSheet } from '@fower/sheet'
import { renderToString } from 'react-dom/server'

const app = express()

app.get('/', function (req, res) {
  const content = renderToString(<Box red100>红色文字</Box>)

  res.send(`
    <html>
      <head>
        <style data-fower="fower">${styleSheet.cssString}</style>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.fower = {
            atomCache = ${JSON.stringify([...atomCache])}
          }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `)
})

app.listen(3000, function () {
  console.log('服务已开启')
})
