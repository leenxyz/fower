import Vue from 'vue'
import styliVue from '@styli/vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(styliVue)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
