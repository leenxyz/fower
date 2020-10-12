// import { createApp,Vue } from 'vue'
import { createApp} from 'vue'
import styliVue from './styli-vue/index.js';
import App from './App.vue'

const app = createApp(App)
// Vue.use(styliVue)
app.use(styliVue)
app.mount('#app')
// createApp(App).mount('#app')
