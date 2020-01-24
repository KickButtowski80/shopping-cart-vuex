import Vuex from 'vuex'
import Vue from 'vue'
import shop from '../api/shop'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: { // data
        products: []
    },
    getters: { // computed properties
        availableProducts(state) {
            return state.products           
        }        
    },
    actions: { // methods
        // actions decide when muatioan would fire
        fetchProducts({commit}) {
            // make api call to fetch the products
            // run setProducts mutation
            // never update the state which is mutations responsibility 
            // context is like store you can have access to state and commit
     
            //actions are asyc we need to know when action is done so we use promise
            return new Promise((resolve, reject) => {
                shop.getProducts(products => {
                    //{commit} is extracting commit from context obj which is es6 feature
                    commit('setProducts', products)
                    resolve("done")
                    reject(new Error("Someting is wrong"))
                })
           })
        },
        // an example of another action 
        // addToCart(context, product) {
        //     if (product.inventory > 0) {
        //         context.commit('pushProductToCart',proudct)
        //     } else {
                // show message for the out of the stock time 
        //     }
        // }
    },
    // responsible for state changes
    // never change the state directly in an action 
    mutations: { // setting and updating the single state
        //products is playload
        setProducts(state, products) {
            //update products which is the state 
            state.products = products
        }
    }

})

export default store;