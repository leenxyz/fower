import React from 'react'
import { View, Box } from '@styli/react'

export const Size = () => {
  return (
    <View>
      <Box f-30 fontBold>
        Size
      </Box>
      <View evenly wrap f-12>
        <View w9 h5 bgBlue20>
          w9 h5
        </View>
        <View w-100 h-50 bgBlue20>
          w-100 h-50
        </View>
        <Box
          as="img"
          src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607882621244&di=bbc7c4f717b902e491cddf2d21cacaf5&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg"
          s-100
        ></Box>
        <View s-50 bgBlue20>
          s-50
        </View>
        <View s-50-100 bgBlue20>
          s-50-100
        </View>
        <View s9 bgBlue20>
          s9
        </View>
        <View circle-50 bgBlue20>
          circle-50
        </View>
        <View w-100 h-50 w-110--hover h-60--hover bgBlue20>
          w-110--hover <br /> h-60--hover
        </View>
        <View s-100 s-110--hover bgBlue20>
          s-110--hover
        </View>
        <View circle-100 circle-110--hover bgBlue20>
          circle-110--hover
        </View>
        <View circle={(theme) => theme.spacing[9]} bgBlue20>
          theme
        </View>
        <View h-100 maxW-50 bgYellow20>
          maxW-50
        </View>
        <View w-100 maxH-50 bgYellow20>
          maxH-50
        </View>
        <View h-100 minW-50 bgYellow20>
          minW-50
        </View>
        <View w-100 minH-50 bgYellow20>
          minH-50
        </View>
        <View s={[50, 100, 200, 300]} bgBlue20>
          responsive
        </View>
      </View>
      <View evenly wrap>
        <View w={[1 / 3, '100%', 400]} h-100 bgRed20></View>
        <View w={[1 / 3, '100%', 400]} h-100 bgGreen20></View>
        <View w={[1 / 3, '100%', 400]} h-100 bgYellow20></View>
      </View>
    </View>
  )
}
