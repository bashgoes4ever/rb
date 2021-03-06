import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
