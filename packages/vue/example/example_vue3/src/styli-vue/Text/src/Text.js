import {
  createStyle,
  Styli
} from '@styli/core';
Styli.setUnit('px');

export default {
  name: 'Text',
  componentName: 'Text',
  props: {
    styli: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: 'text',
    }
  },
  computed: {
    stylier() {
      return createStyle(this.styli)
    }
  },
  render(h) {
    return h(
      this.tag,
      {
        style: this.stylier,
      },
      this.$slots.default
    );
  },
};
