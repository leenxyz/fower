import React from 'react';
import { View, Heading } from '@styli/react';

export const Padding = () => {
  return (
    <View>
      <Heading f-30 fontBold>
        Padding
      </Heading>

      <View debug>
        <View p4 inlineBlock>
          p4
        </View>
        <View pt4 inlineBlock>
          pt4
        </View>
        <View pr4 inlineBlock>
          pr4
        </View>
        <View pb4 inlineBlock>
          pb4
        </View>
        <View pl4 inlineBlock>
          pl4
        </View>
        <View px4 inlineBlock>
          px4
        </View>
        <View py4 inlineBlock>
          py4
        </View>

        <View p-20 inlineBlock>
          p-20
        </View>

        <View p-20px-10px inlineBlock>
          p-20px-10px
        </View>

        <View pt-20 inlineBlock>
          pt-20
        </View>
        <View pr-20 inlineBlock>
          pr-20
        </View>
        <View pt-20 inlineBlock>
          pt-20
        </View>
        <View pl-20 inlineBlock>
          pl-20
        </View>
        <View px-20 inlineBlock>
          px-40
        </View>
        <View py-20 inlineBlock>
          py-40
        </View>
      </View>
    </View>
  );
};
