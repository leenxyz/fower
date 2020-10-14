import React from 'react'
import { View } from '@styli/react'
import { useState } from 'react'

export default () => {
  const [s, setS] = useState(50)

  return (
    <View>
      <View row between white>
        <View s-100 bgBlue600 center {...{ [`opacity-${s}`]: true }}>
          opacity-{s}
        </View>
      </View>
      <View row centerY my-20>
        <View mr-20>Opacity Value: </View>
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
