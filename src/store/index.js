import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

new Vuex.Store({
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
        }
    },

    mutations: { // setting and updating the state
        setProducts() {
            //update products which is the state 
        }
    }

})