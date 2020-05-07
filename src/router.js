import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./components/pages/Home.vue'),
            meta: {
                title: 'Home'
            }
        }
    ],
    scrollBehavior () {
      return { x: 0, y: 0 }
    }
})