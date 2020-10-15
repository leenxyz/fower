import { defineComponent} from 'vue'
import {
  createStyle,
  Styli
} from '@styli/core';
import { getSlot } from '../_util/props-util';
Styli.setUnit('px');
const Acronym = defineComponent({
  name: 'Acronym',
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
        <div style = {this.stylier}>
        {getSlot(this)}
        </div>
      </>
    )
  }
})

export default Acronym