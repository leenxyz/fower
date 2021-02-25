import Vue from 'vue'
import App from './App.vue'
import { vStyliPlugin } from '@styli/vue'

Vue.config.productionTip = false

Vue.use(vStyliPlugin)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
