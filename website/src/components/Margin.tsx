import React from 'react'
import { View } from '@styli/react'
import { useState } from 'react'

export default () => {
  const [m, setM] = useState(10)
  return (
    <View>
      <View row between white>
        <View s-100 bgBlue100>
          <View s-80 bgBlue300 center m={m}>
            m-{m}
          </View>
        </View>
        <View s-100 bgBlue100>
          <View s-80 bgBlue300 center mx={m}>
            mx-{m}
          </View>
        </View>
        <View s-100 bgBlue100>
          <View s-80 bgBlue300 center my={m}>
            my-{m}
          </View>
        </View>
        <View s-100 bgBlue100>
          <View s-80 bgBlue300 center mt={m}>
            mt-{m}
          </View>
        </View>
        <View s-100 bgBlue100>
          <View s-80 bgBlue300 center mr={m}>
            mr-{m}
          </View>
        </View>
        <View s-100 bgBlue100>
          <View s-80 bgBlue300 center mb={m}>
            mb-{m}
          </View>
        </View>
        <View s-100 bgBlue100>
          <View s-80 bgBlue300 center ml={m}>
            ml-{m}
          </View>
        </View>
      </View>
      <View row centerY my-20>
        <View mr-20>Margin Value: </View>
        <input type="range" value={m} max="20" onChange={(e) => { setM(+e.target.value) }} />
      </View>      
    </View>
  )
}
