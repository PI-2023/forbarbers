import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import Vuetify from './plugins/vuetify.js';

import './assets/main.css';

createApp(App)
  .use(createPinia())
  .use(router)
  .use(Vuetify)
  .mount("#app");
