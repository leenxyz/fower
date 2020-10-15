import { defineComponent} from 'vue'
import {
  createStyle,
  Styli
} from '@styli/core';
import { getSlot } from '../_util/props-util';
Styli.setUnit('px');
const P = defineComponent({
  name: 'P',
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
  /*
  setup (props) {
    const input = ref(null)
    const click = (e) => {
      console.log(e)
      console.log(input.value)
      console.log("jsx-tesx-props",props)
    }
    return {
      click,
      input
    }
  },
  */
  render () {
    return (
      <>
        <p style = {this.stylier}>
        {getSlot(this)}
        </p>
      </>
    )
  }
})

export default P