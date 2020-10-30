import * as React from 'react'
import { styli, styled } from '@styli/core'
import presetDefault from '@styli/preset-default'

styli.setup(presetDefault)

export const View = styled('div')
export const Text = styled('span')

export const App = () => {
  return (
    <div className="box">
      <View uppercase row flex-1 center bgYellow300 p-100 color="#00ff00.47">
        Hello world
      </View>
    </div>
  )
}
