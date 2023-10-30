import { createStore } from "vuex";

export default createStore({
    state () {
        return {
            currentContent: "dashboard",
            token: null,
            isAuth: true,
            currUser: {
                "id": 1,
                name: "test",
                "email": "test@test.com",
                "role": "general_manager"
            }
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