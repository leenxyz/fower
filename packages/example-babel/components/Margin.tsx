import React from 'react'
import { View, Heading } from '@styli/react'

export const Margin = () => {
  return (
    <View>
      <Heading f-30 fontBold>
        Margin
      </Heading>

      <View debug>
        <View inlineBlock>
          <View m4 inlineBlock>
            m4
          </View>
        </View>

        <View inlineBlock>
          <View m-20px-10px inlineBlock>
            m-20px-10px
          </View>
        </View>

        <View inlineBlock>
          <View mt4 inlineBlock>
            mt4
          </View>
        </View>
        <View inlineBlock>
          <View mr4 inlineBlock>
            mr4
          </View>
        </View>
        <View inlineBlock>
          <View mb4 inlineBlock>
            mb4
          </View>
        </View>
        <View inlineBlock>
          <View ml4 inlineBlock>
            ml4
          </View>
        </View>
        <View inlineBlock>
          <View mx4 inlineBlock>
            mx4
          </View>
        </View>

        <View inlineBlock>
          <View my4 inlineBlock>
            my4
          </View>
        </View>

        <View inlineBlock>
          <View m-20 inlineBlock>
            m-20
          </View>
        </View>
        <View inlineBlock>
          <View mt-20 inlineBlock>
            m-20
          </View>
        </View>

        <View inlineBlock>
          <View mt-20 inlineBlock>
            mt-20
          </View>
        </View>

        <View inlineBlock>
          <View mr-20 inlineBlock>
            mr-20
          </View>
        </View>

        <View inlineBlock>
          <View mt-20 inlineBlock>
            mt-20
          </View>
        </View>

        <View inlineBlock>
          <View ml-20 inlineBlock>
            ml-20
          </View>
        </View>

        <View inlineBlock>
          <View mx-20 inlineBlock>
            mx-20
          </View>
        </View>

        <View inlineBlock>
          <View my-20 inlineBlock>
            my-20
          </View>
        </View>
      </View>
    </View>
  )
}
