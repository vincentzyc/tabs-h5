import { createApp } from 'vue'
import { Lazyload } from 'vant';
import App from './App.vue'
import Axios from './plugins/axios'
import { createPinia } from 'pinia'
import '@vant/touch-emulator' //vant 桌面端适配
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import './assets/css/base.css'
import './assets/css/main.css'

const app = createApp(App);

app.use(createPinia())

app.config.globalProperties.$axios = Axios

app.use(Lazyload);
app.mount('#app')