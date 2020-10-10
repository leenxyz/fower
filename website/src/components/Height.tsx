import React from 'react'
import { View } from '@styli/react'
import { useState } from 'react'

export default () => {
  const [h, setH] = useState(50)
  const [maxH, setMaxH] = useState(80)
  const [minH, setMinH] = useState(20)

  return (
    <View>
      <View row between white>
        <View s-100 bgBlue100>
          <View w-100 h={h} minH={minH} maxH={maxH} bgBlue300 center>
            h-{h}
          </View>
        </View>
      </View>
      <View row centerY my-20>
        <View mr-20>Height Value: </View>
        <input
          type="range"
          value={h}
          max={maxH}
          min={minH}
          onChange={(e) => {
            setH(+e.target.value)
          }}
        />
        <View>{h}</View>
      </View>
      <View row centerY my-20>
        <View mr-20>MinHeight Value: </View>
        <input
          type="range"
          value={minH}
          max="100"
          onChange={(e) => {
            setMinH(+e.target.value)
          }}
        />
        <View>{minH}</View>
      </View>
      <View row centerY my-20>
        <View mr-20>MaxHeight Value: </View>
        <input
          type="range"
          value={maxH}
          max="100"
          onChange={(e) => {
            setMaxH(+e.target.value)
          }}
        />
        <View>{maxH}</View>
      </View>
    </View>
  )
}
