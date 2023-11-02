import { createStore } from "vuex";

export default createStore({
    state () {
        return {
            currentContent: "dashboard",
            token: null,
            isAuth: true,
            currUser: {
                "id": 1,
                "username": "Filip",
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
        },
        setSignIn (state, payload) {
            state.isAuth = true
            state.currUser.id = payload.id
            state.currUser.username = payload.username 
            state.currUser.email = payload.email
            state.token = payload.token
        }
    },
    actions: {
        changeContent ({ commit },payload) {
            commit('setCurrentContent', payload)
        },
        signIn ({ commit }, payload) {
            commit('setSignIn', payload)
        }
    }
})
