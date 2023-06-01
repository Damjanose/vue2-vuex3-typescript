import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'LoginView', component: () => import(/* webpackChunkName: "login-view" */ '../views/LoginView.vue') },
    { path: '/register', name: 'RegisterView', component: () => import(/* webpackChunkName: "register-view" */ '../views/RegisterView.vue') },
    { path: '/:notFound(.*)', redirect: '/' }
  ]
})
