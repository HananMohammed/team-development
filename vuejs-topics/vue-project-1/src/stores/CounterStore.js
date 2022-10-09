import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    //data
    state: () => {
        return { count: 0 }
    },
    //methods
    actions: {
        increment() {
            this.count++
        },
    },
    //computed
    getters: {
        remaining: (state) => 10 - state.count,
    },
})
