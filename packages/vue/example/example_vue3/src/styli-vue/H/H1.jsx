import { defineComponent} from 'vue'
import {
  createStyle,
  Styli
} from '@styli/core';
import { getSlot } from '../_util/props-util';
Styli.setUnit('px');
const H1 = defineComponent({
  name: 'H1',
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
        <h1 style = {this.stylier}>
        {getSlot(this)}
        </h1>
      </>
    )
  }
})

export default H1