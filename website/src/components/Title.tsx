import React, { useState } from 'react'
import { View } from '@styli/react'

export default () => {
  const [title, setTitle] = useState('h1')
  const types = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

  return (
    <View>
      <View row between>
        <View s-100 bgBlue100 center {...{ [title]: true }}>
          {title}
        </View>
      </View>
      <View row centerY my-20>
        <View mr-20>Title Value: </View>
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
