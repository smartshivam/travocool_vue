import { createStore } from "vuex";

export const store = createStore({
    state:{
        loader:true
    },
    mutations:{
        viewLoader(){
            this.state.loader = true
        },
        hideLoader(){
           this.state.loader = false
        }
    }
})