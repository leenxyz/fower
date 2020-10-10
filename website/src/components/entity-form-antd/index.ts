import { registerField, registerReset, registerSubmit, registerForm } from 'entity-form'
import { Input } from './fields/Input'
import { InputNumber } from './fields/InputNumber'
import { Radio } from './fields/Radio'
import { Checkbox } from './fields/Checkbox'
import { SingleCheckbox } from './fields/SingleCheckbox'
import { Rate } from './fields/Rate'
import { Select } from './fields/Select'
import { Rest } from './fields/Reset'
import { Submit } from './fields/Submit'
import { Form } from './fields/Form'
import { Switch } from './fields/Switch'
import { Mentions } from './fields/Mentions'
import { Slider } from './fields/Slider'
import { DatePicker } from './fields/DatePicker'
import { RangePicker } from './fields/RangePicker'

export function registerAll() {
  registerForm(Form)
  registerSubmit(Submit)
  registerReset(Rest)

  // 注册表单控件
  registerField('Input', Input)
  registerField('InputNumber', InputNumber)
  registerField('Radio', Radio)
  registerField('Checkbox', Checkbox)
  registerField('SingleCheckbox', SingleCheckbox)
  registerField('Switch', Switch)
  registerField('Slider', Slider)
  registerField('Mentions', Mentions)
  registerField('Rate', Rate)
  registerField('Select', Select)
  registerField('DatePicker', DatePicker)
  registerField('RangePicker', RangePicker)
}
