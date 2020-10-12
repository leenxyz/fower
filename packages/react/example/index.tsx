import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { View } from '../.'
import { createStyle, Styli } from '@styli/core'

const App = () => {
  return (
    <div className="box">
      <View s-600 borderB-10 between center disabledStyle test-18>
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
