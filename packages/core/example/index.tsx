import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { styled } from '../../core/src'

export const View = styled('div')
export const Text = styled('span')

const App = () => {
  return (
    <div className="box">
      {/* <View p-20 color={['red', 'yellow', 'blue', 'green']} bg={['yellow', 'blue', 'green', 'red']}>
        <View
          s={[40, 50, 60, 70]}
          bgBlue300
          p-20
          f={[44, 55, 66, 77]}
          opacity={[40, 60, 80, 100]}
          ml={[10, 30, 60, 80]}
          rounded={[10, 20, 30, 40]}
        >
          HH
        </View>
      </View> */}
      <View red s="100" center mt-100 f={[44, 55, 66, 77]} css={{}}>
        哈哈哈
      </View>
      <View red s="100" center mt-100 f={[44, 55, 66, 77]}>
        哈哈哈
      </View>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
