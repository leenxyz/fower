import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { View } from '../.'

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
        <View s-80 bgBlue400>
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
