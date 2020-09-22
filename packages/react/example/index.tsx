import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { View } from '../.'

const App = () => {
  return (
    <div>
      <View
        bgRed400
        p-40px
        w-200
        textCenter
        onClick={() => {
          console.log('click......')
        }}
      >
        this is a View
      </View>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
