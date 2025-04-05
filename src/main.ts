import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createHead } from '@vueuse/head';
import { routes } from 'vue-router/auto-routes';
// FontAwesomeをインポート
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import './style.css';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

library.add(fas, fab);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router).use(createHead()).mount('#app');
