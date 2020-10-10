import React from 'react'
import { View } from '@styli/react'
import { useState } from 'react'

export default () => {
  const [w, setW] = useState(50)
  const [maxW, setMaxW] = useState(80)
  const [minW, setMinW] = useState(20)

  return (
    <View>
      <View row between white>
        <View s-100 bgBlue100>
          <View h-100 w={w} minW={minW} maxW={maxW} bgBlue300 center>
            w-{w}
          </View>
        </View>
      </View>
      <View row centerY my-20>
        <View mr-20>Width Value: </View>
        <input type="range" value={w} max={maxW} min={minW} onChange={(e) => { setW(+e.target.value) }} />
        <View>{w}</View>
      </View>
      <View row centerY my-20>
        <View mr-20>MinWidth Value: </View>
        <input type="range" value={minW} max="100" onChange={(e) => { setMinW(+e.target.value) }} />
        <View>{minW}</View>
      </View>
      <View row centerY my-20>
        <View mr-20>MaxWidth Value: </View>
        <input type="range" value={maxW} max="100" onChange={(e) => { setMaxW(+e.target.value) }} />
        <View>{maxW}</View>
      </View>
    </View>
  )
}
