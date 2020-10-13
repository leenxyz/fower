// import Div from './src/Div';
import Div from './src/Div.vue';

Div.install = function (Vue) {
  console.log('====aaa', Div);
  Vue.component(Div.name, Div);
};
export default Div;
