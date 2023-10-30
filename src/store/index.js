import { createStore } from "vuex";

export default createStore({
    state () {
        return {
            currentContent: "dashboard"
        }
    },
    mutations: {
        setCurrentContent (state, payload) {
            state.currentContent = payload.newContent
        }
    },
    actions: {
        changeContent ({ commit },payload) {
            commit('setCurrentContent', payload)
        }
    }
})
