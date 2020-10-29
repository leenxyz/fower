import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { styled, Styli } from '../../core/src'
import hidePlugin from '../src/plugins/styli-plugin-hide'
import casePlugin from '../src/plugins/styli-plugin-case'
import jss from 'jss'

const s = jss.createStyleSheet({})

Styli.config({
  plugins: [hidePlugin(), casePlugin()],
})

export const View = styled('div')
export const Text = styled('span')

const App = () => {
  return (
    <div className="box">
      <View uppercase row flex-1 center bgGray300 p-100 color="#00ff00.47">
        Hello world
      </View>
      <View
        red
        s="100"
        center
        mt-100
        f={[10, 20, 30, 40]}
        css={{
          background: 'red',
          ':hover': {
            fontSize: '12px',
            color: 'yellow',
          },
          '::before': {
            content: '" "',
            display: 'block',
            width: '100px',
            height: '100px',
            backgroundColor: 'green',
          },
          '.p1': {
            fontSize: '22px',
            border: '1px solid yellow',
            '.p2': {
              fontSize: '11px',
              color: 'blue',
              ':hover': {
                fontSize: '18px',
                color: 'black',
              },
              '>span': {
                color: 'green',
              },
            },
          },
        }}
      >
        哈哈哈
        <div className="p1">
          小字
          <View className="p2">
            蓝字
            <span>哈哈哈哈哈</span>
          </View>
        </div>
      </View>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
