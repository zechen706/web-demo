import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {
            
        },
       

    },
    mutations: {
        initUser(state, user) {
            state.user = { ...state.user, ...user }
        }
    }
})

export default store