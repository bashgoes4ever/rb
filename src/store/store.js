import Vue from 'vue'
import Vuex from 'vuex'
import popups from './modules/popups'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        popups,
    }
})

