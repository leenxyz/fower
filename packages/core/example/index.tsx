import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { styled, Styli } from '../../core/src'
import { toCss } from '../src/plugins'

Styli.config({
  plugins: [
    [
      toCss,
      {
        breakpoints: [0, 640, 768, 1024],
      },
    ],
  ],
})

export const View = styled('div')
export const Text = styled('span')

const App = () => {
  return (
    <div className="box">
      <View color="#000.57">哈哈哈哈</View>
      <View
        red
        s="100"
        center
        mt-100
        f={[44, 55, 66, 77]}
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
