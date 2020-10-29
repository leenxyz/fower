import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { styled, styli } from '../../core/src'
import hidePlugin from '../src/plugins/styli-plugin-hide'
import casePlugin from '../src/plugins/styli-plugin-case'
import presetDefault from './src'

// styli.setup({
//   plugins: [hidePlugin(), casePlugin()],
// })

styli.setup(presetDefault)

export const View = styled('div')
export const Text = styled('span')

const App = () => {
  return (
    <div className="box">
      <View uppercase row flex-1 center bgYellow300 p-100 color="#00ff00.47">
        Hello world
      </View>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
