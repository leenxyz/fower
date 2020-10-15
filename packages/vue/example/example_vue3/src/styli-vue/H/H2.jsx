import { defineComponent} from 'vue'
import {
  createStyle,
  Styli
} from '@styli/core';
import { getSlot } from '../_util/props-util';
Styli.setUnit('px');
const H2 = defineComponent({
  name: 'H2',
  props: {
    styli: {
      type: String,
      default: '',
    }
  },
  computed: {
    stylier() {
      return createStyle(this.styli)
    },
  },
  render () {
    return (
      <>
        <h2 style = {this.stylier}>
        {getSlot(this)}
        </h2>
      </>
    )
  }
})

export default H2