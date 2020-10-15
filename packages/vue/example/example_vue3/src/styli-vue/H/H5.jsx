import { defineComponent} from 'vue'
import {
  createStyle,
  Styli
} from '@styli/core';
import { getSlot } from '../_util/props-util';
Styli.setUnit('px');
const H5 = defineComponent({
  name: 'H5',
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
        <h5 style = {this.stylier}>
        {getSlot(this)}
        </h5>
      </>
    )
  }
})

export default H5