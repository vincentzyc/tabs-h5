import { createApp } from 'vue';
import { Lazyload } from 'vant';
import App from './App.vue';
import Axios from './plugins/axios';
import { createPinia } from 'pinia';
import '@vant/touch-emulator'; //vant 桌面端适配
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import './assets/css/base.css';
import './assets/css/main.css';
import pkg from '../package.json';

import * as Sentry from '@sentry/vue';

const app = createApp(App);

app.use(createPinia());

app.config.globalProperties.$axios = Axios;
app.config.globalProperties.$sentry = Sentry;

Sentry.init({
  app,
  dsn: 'http://0edfd37f7427420f8d98647b76e530dc@101.33.201.93:9000/3',
  integrations: [new Sentry.Replay()],
  release: pkg.version,
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  // beforeBreadcrumb(event,hint) {
  //   if(event.category === "xhr"){
  //     if(event.data) {
  //       event.data.request = hint?.input
  //       event.data.response = hint?.xhr.response
  //     }
  //   }
  //   return event;
  // },
});

app.use(Lazyload);
app.mount('#app');
