import { createApp } from 'vue';
import styliVue from './styli-vue/index.js';
import App from './App.vue';

const app = createApp(App);
app.use(styliVue);
app.mount('#app');
