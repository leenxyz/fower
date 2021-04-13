import Vue, { createApp } from 'vue'
import VueStyli from '@styli/vue'
import App from './App.vue'

const app = createApp(App)

app.use(VueStyli as any)

app.mount('#app')
