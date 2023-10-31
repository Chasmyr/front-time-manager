import { createStore } from "vuex";

export default createStore({
    state () {
        return {
            currentContent: "dashboard",
            token: null,
            isAuth: false,
            currUser: {
                "id": 1,
                "name": "Filip",
                "email": "test@test.com",
                "role": "general_manager",
                "clock": {
                    "start": "2023-10-26 08:00",
                    "isClocking": false
                }
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