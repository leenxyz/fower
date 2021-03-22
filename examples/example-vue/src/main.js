import Vue from 'vue'
import App from './App.vue'
import VueStyli from '@styli/vue'

Vue.config.productionTip = false

Vue.use(VueStyli)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
