import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        owner: 'valerianB'
    },
    mutations: {
        setOwner(state, owner) {
            state.owner = owner;
        }
    },
    getters: {
        getOwner(state) {
            return state.owner;
        }
    }
});

export const store = new Vuex.Store({
    state: {
        nom: '',
        prenom: ''
    },
    mutations: {
        GET_NOM: (state, value) => {
            state.nom = value;
        },
        GET_PRENOM: (state, value) => {
            state.prenom = value;
        }
    }
});