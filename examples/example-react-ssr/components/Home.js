import React from 'react'
import { Box } from '@fower/react'

export const Home = () => {
  return (
    <Box square-500 bgBlue100>
      <Box row borderB-1>
        <Box flex-4>name</Box>
        <Box flex-8>address</Box>
      </Box>
      {userList.map((user) => {
        const { name, address } = user
        return (
          <Box key={name} row borderB-1 borderGray100>
            <Box flex-4 fontBold gray900>
              {name}
            </Box>
            <Box flex-8 gray500>
              {address}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

const userList = [
  {
    name: 'Tom',
    address: 'BeiJing',
  },
  {
    name: 'Jack',
    address: 'Tokyo',
  },
]
