import Div from './Div/index.js';
import P from './P/P.jsx';
const components = [Div, P];

const install = function (Vue) {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  version: '0.0.1',
  install,
  Div,
  P,
};
