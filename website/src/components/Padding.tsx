import React from 'react'
import { View } from '@styli/react'
import { useState } from 'react'

export default () => {
  const [m, setM] = useState(10)
  return (
    <View>
      <View row between white>
        <View s-100 bgBlue100 p={m}>
          <View s="100%" bgBlue300 center>
            p-{m}
          </View>
        </View>
        <View s-100 bgBlue100 px={m}>
          <View s="100%" bgBlue300 center>
            px-{m}
          </View>
        </View>
        <View s-100 bgBlue100 py={m}>
          <View s="100%" bgBlue300 center>
            py-{m}
          </View>
        </View>
        <View s-100 bgBlue100 pt={m}>
          <View s="100%" bgBlue300 center>
            pt-{m}
          </View>
        </View>
        <View s-100 bgBlue100 pr={m}>
          <View s="100%" bgBlue300 center>
            pr-{m}
          </View>
        </View>
        <View s-100 bgBlue100 pb={m}>
          <View s="100%" bgBlue300 center>
            pb-{m}
          </View>
        </View>
        <View s-100 bgBlue100 pl={m}>
          <View s="100%" bgBlue300 center>
            pl-{m}
          </View>
        </View>
      </View>
      <View row centerY my-20>
        <View mr-20>Padding Value: </View>
        <input
          type="range"
          value={m}
          max="20"
          onChange={(e) => {
            setM(+e.target.value)
          }}
        />
      </View>
    </View>
  )
}
