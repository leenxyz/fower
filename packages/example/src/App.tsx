import * as React from 'react'
import { styli, styled, css } from '@styli/core'
import presetDefault from '@styli/preset-default'

styli.setup({
  ...presetDefault,
  inline: false,
})

// const myClassName = css('p-20 mx-10 borderGray-1 f-40')

// const app = document.getElementById('root')
// app?.className = myClassName

export const View = styled('div')
export const Text = styled('span')

export const App = () => {
  return (
    <div className="box">
      <View f-50 f-80_h onClick={() => {}}>
        <View s-100>gogog</View>
      </View>
    </div>
  )
}
