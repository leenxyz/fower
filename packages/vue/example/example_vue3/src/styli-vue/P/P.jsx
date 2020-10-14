// import { defineComponent, ref } from 'vue'
import { defineComponent } from 'vue';
import { createStyle, Styli } from '@styli/core';
import { getSlot } from '../_util/props-util';
Styli.setUnit('px');
const Demo = defineComponent({
  name: 'P',
  props: {
    styli: {
      type: String,
      default: '',
    },
  },
  computed: {
    stylier() {
      return createStyle(this.styli);
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
  render() {
    console.log('render', this.stylier);
    console.log('getSlot', getSlot);
    return (
      <>
        <div style={this.stylier}>
          组件内部
          {getSlot(this)}
        </div>
      </>
    );
  },
});

export default Demo;
