import Vue from 'vue'
import App from './App.vue'
import styliVue from './styli-vue/index.js';

Vue.config.productionTip = false
Vue.use(styliVue)
new Vue({
  render: (h) => h(App),
}).$mount('#app');
