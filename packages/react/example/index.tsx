import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { View } from '../.'
import { createStyle } from '@styli/core'

const divStyle = createStyle('bgYellow s-120 black center rounded-10')
console.log('divStyle:', divStyle)

const App = () => {
  return (
    <div>
      <View
        // bgRed400
        // column
        // centerY
        // bottom
        // right
        // centerX
        // right
        s-600
        borderBlack-10
        textCenter
        onClick={() => {
          console.log('click......')
        }}
      >
        <div style={divStyle}>这是一个 Div</div>

        <View s-80 bgBlue400 color="red" rounded-10>
          Box1
        </View>
        <View w-120 h-120 bgGreen400>
          Box2
        </View>
      </View>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
