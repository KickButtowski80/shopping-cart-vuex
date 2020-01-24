import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: { // data
        products: []
    },
    getters: { // computed properties
        productsCount() {
            
        }        
    },
    actions: { // methods
        fetchProducts() {
            // make api call to fetch the products
            // run setProducts mutation
            // never update the state which is mutations responsibility 
        }
    },

    mutations: { // setting and updating the single state
        //products is playload
        setProducts(state, products) {
            //update products which is the state 
            state.products = products
        }
    }

})

export default store;