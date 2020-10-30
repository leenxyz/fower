import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { styled } from '../../core/src/api/styled'
import { styli } from '../../core/src/styli'
// import { styli, styled } from '@styli/core'
// import presetDefault from './src'
import presetDefault from '@styli/preset-default'

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
