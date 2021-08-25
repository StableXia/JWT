import { createRouter, createWebHashHistory } from 'vue-router';

import Login from './pages/Login/index.vue';
import Home from './pages/Home/index.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
  ],
});

export default router;
