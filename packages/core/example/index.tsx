import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { styled } from '../../core/src'

export const View = styled('div')
export const Text = styled('span')

const App = () => {
  return (
    <div className="box">
      <View s-50 bg="blue100" oyAuto>
        size
      </View>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
