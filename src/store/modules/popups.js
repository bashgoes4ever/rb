export default {
    state: {
        register_popup: {
            'open': false
        }
    },
    mutations: {
        setRegisterPopup(state, data) {
            state.register_popup.open = data.open
            if (data.open) document.documentElement.style.overflow = 'hidden'
            else document.documentElement.style.overflow = 'auto'
        }
    },
    actions: {
        setRegisterPopup({commit}, data) {
            commit('setRegisterPopup', data)
        }
    },
    getters: {
        register_popup: state => state.register_popup
    }
}