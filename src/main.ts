import { createApp } from 'vue'
import { Lazyload } from 'vant';
import App from './App.vue'
import './assets/css/base.css'
import './assets/css/main.css'

const app = createApp(App);
app.use(Lazyload);
app.mount('#app')