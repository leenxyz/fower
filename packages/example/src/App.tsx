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
      <View lhLoose f-20 bgRed20>
        <View s-400>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
          accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
          sanctus est Lorem ipsum dolor sit amet.
        </View>
      </View>
      <View f-50 f-80_h>
        Core
      </View>
    </div>
  )
}
