import { createStyle, Styli } from '@styli/core';
Styli.setUnit('px');

export default {
  name: 'Div',
  componentName: 'DIV',
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
  render(h) {
    return h(
      'div',
      {
        style: this.stylier,
      },
      this.$slots.default
    );
  },
};
