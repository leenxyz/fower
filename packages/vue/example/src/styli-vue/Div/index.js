import Div from './src/Div';

Div.install = function (Vue) {
  console.log('Div--->', Div);
  console.log('vue---->', Vue);
  Vue.component(Div.name, Div);
};
export default Div;
