import { createStore } from "vuex";

export default createStore({
    state () {
        return {
            currentContent: "dashboard",
            token: null,
            isAuth: false,
            currUser: {
                "id": null,
                "username": null,
                "email": null,
                "role": null,
                "clock": null
            },
            currWeekDisplayed: null
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
            state.currUser.role = payload.role
            state.token = payload.token
        },
        setCurrWeek(state, payload) {
            state.currWeekDisplayed = payload
        },
        resetState(state) {
            state.currentContent = 'dashboard'
            state.token = null
            state.isAuth = false
            state.currUser = {
                "id": null,
                "username": null,
                "email": null,
                "role": null,
                "clock": null
            },
            state.currWeekDisplayed = null
        }
    },
    actions: {
        changeContent ({ commit },payload) {
            commit('setCurrentContent', payload)
        },
        login ({ commit }, payload) {
            commit('setSignIn', payload)
        },
        changeWeek ({ commit }, payload) {
            commit('setCurrWeek', payload)
        },
        logout ({ commit }, payload) {
            commit('resetState', payload)
        }
    }
})