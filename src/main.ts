import { createApp } from 'vue'
import { Lazyload } from 'vant';
import App from './App.vue'
import Axios from './plugins/axios'
import { createPinia } from 'pinia'
// import 'vant/lib/style';
import './assets/css/base.css'
import './assets/css/main.css'

const app = createApp(App);

app.use(createPinia())

app.config.globalProperties.$axios = Axios

app.use(Lazyload);
app.mount('#app')