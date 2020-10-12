import Div from './Div/index.js';

const components = [
  Div
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

export default {
  version: '0.0.1',
  install,
  Div
}