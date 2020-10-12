import React, { useState } from 'react'
import { View } from '@styli/react'

export default () => {
  const [c, setC] = useState(50)

  return (
    <View>
      <View row between white>
        <View s-100 bgBlue100 center>
          <View c={c} bgBlue300></View>
        </View>
      </View>
      <View row centerY my-20>
        <View mr-20>Circle Value: </View>
        <input
          type="range"
          value={c}
          max="100"
          min="0"
          onChange={(e) => {
            setC(+e.target.value)
          }}
        />
        <View>{c}</View>
      </View>
    </View>
  )
}
