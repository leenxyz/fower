import Div from './src/Div.vue';

Div.install = function (Vue) {
  console.log('Vue--', Div);
  Vue.component(Div.name, Div);
};
export default Div;
