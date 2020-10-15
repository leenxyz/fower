import { defineComponent} from 'vue'
import {
  createStyle,
  Styli
} from '@styli/core';
import { getSlot } from '../_util/props-util';
Styli.setUnit('px');
const H6 = defineComponent({
  name: 'H6',
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
        <h6 style = {this.stylier}>
        {getSlot(this)}
        </h6>
      </>
    )
  }
})

export default H6