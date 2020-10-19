import React, { useState } from 'react'
import { View } from '@styli/react'

export default () => {
  const [size, setTitle] = useState('base')
  const types = ['xs', 'sm', 'base', 'md', 'lg', 'xl', '2xl', 'inner', 'outline', 'none']

  return (
    <View>
      <View row between>
        <View s-100 bgWhite center {...{ [`shadow-${size}`]: true }}>
          {size}
        </View>
      </View>
      <View row centerY my-20>
        <View mr-20>Shadow Value: </View>
        <View row wrap>
          {types.map((type, idx) => {
            return (
              <View key={type} w-200>
                <input
                  type="radio"
                  id={type}
                  defaultChecked={!idx}
                  name="font-weight"
                  value={type}
                  onChange={(e) => setTitle(e.currentTarget.value)}
                />
                <label htmlFor={type}>{type}</label>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}
