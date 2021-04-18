import Vue, { createApp } from 'vue'
import VueFower from '@fower/vue'
import App from './App.vue'

const app = createApp(App)

app.use(VueFower as any)

app.mount('#app')
