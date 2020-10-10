import React from 'react'
import { View } from '@styli/react'
import { useState } from 'react'

export default () => {
  const [s, setS] = useState(50)

  return (
    <View>
      <View row between white>
        <View s-100 bgBlue100>
          <View s={s} bgBlue300 center>
            s-{s}
          </View>
        </View>
      </View>
      <View row centerY my-20>
        <View mr-20>Square Value: </View>
        <input
          type="range"
          value={s}
          max="100"
          min="0"
          onChange={(e) => {
            setS(+e.target.value)
          }}
        />
        <View>{s}</View>
      </View>
    </View>
  )
}
