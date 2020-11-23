import { styled } from '@styli/styled'
import * as React from 'react'

const View = styled('div')

export const App = () => {
  return (
    <div className="box">
      <div h1 p-12 c="blue" onClick={() => {}}>
        哈哈哈哈
      </div>
      <View p-12 style={{ color: 'red' }}>
        嘿嘿嘿
      </View>
      <View space-10 row wrap>
        <View bgBlue20 s-100 w={[100, 200, 300, 400]}>
          space-10
        </View>
      </View>
    </div>
  )
}
