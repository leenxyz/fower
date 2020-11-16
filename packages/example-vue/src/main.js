import Vue from 'vue'
import App from './App.vue'
import styliVue from '@styli/vue'
import { styli } from '@styli/core'
import preset from '@styli/preset-default'

styli.configure(preset)

Vue.config.productionTip = false

Vue.use(styliVue)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
