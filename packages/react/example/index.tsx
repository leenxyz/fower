import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { View } from '../.'
import { createStyle } from '@styli/core'
import { flexPropToStyle } from '@styli/core/dist/modifier'

const App = () => {
  return (
    <div className="box">
      <View
        // s-600
        // borderBlack-10
        // textCenter
        s-600
        textCenter
        bgGray300
        between
        centerY
      >
        <View s-80 bgBlue400 p-50>
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
