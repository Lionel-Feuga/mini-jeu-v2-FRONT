import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';  

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import 'vuetify/styles';  

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(vuetify);
app.use(router);  
app.mount('#app');