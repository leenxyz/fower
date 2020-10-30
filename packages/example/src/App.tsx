import * as React from 'react'
import { styli, styled } from '@styli/core'
import presetDefault from '@styli/preset-default'

styli.setup(presetDefault)

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
        bg="#0000ff"
        w={[100, 200, 400, 800, 1000]}
        css={{
          fontSize: 30,
        }}
      >
        gogog
      </View>
    </div>
  )
}
