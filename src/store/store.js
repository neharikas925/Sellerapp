import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        frequent: ['toy']
    },
    mutation: {
        addWord (state, word) {
            let freq = state.frequent;
            let isPresent = false;
            for(let i = 0; i < freq.length; i++) {
                if(freq[i] === word) {
                    isPresent = true;
                    break;
                }
            }
            if(!isPresent) {
                freq.push(word);
                state.frequent = freq;
            }
        }
    },
})