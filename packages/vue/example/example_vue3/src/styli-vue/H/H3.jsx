import { defineComponent} from 'vue'
import {
  createStyle,
  Styli
} from '@styli/core';
import { getSlot } from '../_util/props-util';
Styli.setUnit('px');
const H3 = defineComponent({
  name: 'H3',
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
        <h3 style = {this.stylier}>
        {getSlot(this)}
        </h3>
      </>
    )
  }
})

export default H3