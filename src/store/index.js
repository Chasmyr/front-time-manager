import { createStore } from "vuex";

export default createStore({
    state () {
        return {
            currentContent: "Dashboard",
            token: null,
            isAuth: false,
            currUser: {
                "id": null,
                "username": null,
                "email": null,
                "role": null,
                "clock": null,
                "workingtimes": null
            },
            currWeekDisplayed: null,
            usersList: null,
            isNavOpen: false,
            userFocus: null
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
            state.currUser.clock = payload.clock
            state.currUser.workingtimes = payload.workingTimes
            state.token = payload.token
            state.currentContent = "Dashboard"
        },
        setCurrWeek(state, payload) {
            state.currWeekDisplayed = payload
        },
        resetState(state) {
            state.currentContent = 'Dashboard'
            state.token = null
            state.isAuth = false
            state.currUser = {
                "id": null,
                "username": null,
                "email": null,
                "role": null,
                "clock": null,
                "workingtimes": null
            },
            state.currWeekDisplayed = null,
            state.usersList = null,
            state.isNavOpen = false,
            state.userFocus = null
        },
        setClock(state, payload) {
            state.currUser.clock = payload
        },
        setNav(state) {
            state.isNavOpen = !state.isNavOpen
        },
        setUserFocus(state, payload) {
            state.userFocus = payload
        },
        setUpdateUser(state, payload) {
            state.currUser.username = payload.username 
            state.currUser.email = payload.email
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
        logout ({ commit }) {
            commit('resetState')
        },
        changeClock ({ commit }, payload) {
            commit('setClock', payload)
        },
        changeNav ({ commit }) {
            commit('setNav')
        },
        changeFocus ({ commit }, payload) {
            commit('setUserFocus', payload)
        },
        changeUpdateUser ({ commit }, payload) {
            commit('setUpdateUser', payload)
        }
    }
})