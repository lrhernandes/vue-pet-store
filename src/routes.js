import Vue from 'vue';
import VueRouter from 'vue-router'
import Login from './pages/login.vue';
import Home from './pages/home.vue';
import Product from './pages/product.vue';
import E404 from './pages/404.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', name:'Home', component: Home},
    { path: '/entrar', name:'Login', component: Login },
    { path: '/product/:id', name:'Product', component: Product },
    { path: '*', name:'404', component: E404 }
]

const router = new VueRouter({
  routes
})

export default router;
