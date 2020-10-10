import React, { useEffect } from 'react'
import { View } from '@styli/react'
import { entity, field, useForm, EntityForm, Field } from 'entity-form'
import { ArrayMaxSize } from 'class-validator'
import { registerAll } from './entity-form-antd'
import 'antd/dist/antd.css' // or 'antd/dist/antd.less'

registerAll()

@entity('Layout')
class LayoutEntity {
  @field({
    label: 'Layout Direction',
    value: 'row',
    component: 'Radio',
    enum: [
      { label: 'row', value: 'row' },
      { label: 'column', value: 'column' },
    ],
  })
  direction: string

  @field({
    label: 'Layout Alignment',
    value: ['center'],
    component: 'Checkbox',
    enum: [
      { label: 'center', value: 'center' },
      { label: 'centerX', value: 'centerX' },
      { label: 'centerY', value: 'centerY' },
      { label: 'left', value: 'left' },
      { label: 'top', value: 'top' },
      { label: 'right', value: 'right' },
      { label: 'bottom', value: 'bottom' },
    ],
  })
  @ArrayMaxSize(2, { message: '选择一个或者两个Alignment选项' })
  alignment: string[]
}

export const FlexLayout = () => {
  const result = useForm(LayoutEntity)
  const { state, helpers, actions } = result
  const alignment: string[] = helpers.getValue('alignment')
  const direction = helpers.getValue('direction')

  useEffect(() => {
    actions.setDisableds({ alignment: state.values.alignment.length == 2 })
  }, [alignment])

  const containerProps = alignment.reduce(
    (prev, cur) => ({
      ...prev,
      [cur]: true,
    }),
    { [direction]: true } as any,
  )

  return (
    <View>
      <View bgGray300 h-300 {...containerProps}>
        <View s-50 bgBlue300 center>
          A
        </View>
        <View s-120 bgGreen300 center>
          B
        </View>
        <View s-80 bgOrange300 center>
          C
        </View>
      </View>
      <EntityForm use={result}>
        <View left mt-20>
          <View mr-30>
            <Field name="direction"></Field>
          </View>
          <View>
            <Field name="alignment"></Field>
          </View>
        </View>
      </EntityForm>
    </View>
  )
}
