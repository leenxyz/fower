import { defineComponent} from 'vue'
import {
  createStyle,
  Styli
} from '@styli/core';
Styli.setUnit('px');
const Hr = defineComponent({
  name: 'Hr',
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
        <hr style = {this.stylier}/>
      </>
    )
  }
})

export default Hr