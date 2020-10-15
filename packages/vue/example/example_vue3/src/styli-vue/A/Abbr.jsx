import { defineComponent} from 'vue'
import {
  createStyle,
  Styli
} from '@styli/core';
import { getSlot } from '../_util/props-util';
Styli.setUnit('px');
const Abbr = defineComponent({
  name: 'Abbr',
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
        <abbr style = {this.stylier}>
        {getSlot(this)}
        </abbr>
      </>
    )
  }
})

export default Abbr