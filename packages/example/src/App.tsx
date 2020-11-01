import * as React from 'react'
import { styli, styled, css } from '@styli/core'
import presetDefault from '@styli/preset-default'

styli.setup(presetDefault)

const myClassName = css('p-20 mx-10 borderGray-1 f-40', {
  display: 'block',
})

const app = document.getElementById('root')
app?.className = myClassName

export const View = styled('div')
export const Text = styled('span')

export const App = () => {
  return (
    <div className="box">
      <View
        uppercase
        row
        flex-1
        center
        bgYellow300
        p-100
        m-10
        bg="#00ff00"
        w={[100, 200, 400, 800]}
        css={{
          fontSize: 30,
        }}
      >
        Hello world
      </View>
      <View
        p-100
        m-10
        bg="blue"
        w={['100%', 200, 400, 800, 1000]}
        css={{
          fontSize: 30,
        }}
      >
        gogog
      </View>
    </div>
  )
}
