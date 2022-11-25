import { createStore } from "vuex";

export default createStore({
    state () {
        return {
            activeSection: 'home'
        }
    },
    mutations: {
        changeSection (state, payload) {
            state.activeSection = payload.newSectionName;
        }
    },
    getters: {
        getSection(state){
            return state.activeSection;
        }
    }
})