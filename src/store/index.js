import Vuex from 'vuex'
import Vue from 'vue' 
import actions from './actions'

Vue.use(Vuex)
let store = new Vuex.Store({
    state: { // data
        products: [],
        // hold obj { id , quantity }
        cart: [],
        checkoutStatus: null
    },
    getters: { // computed properties
        availableProducts(state) {
            return state.products.filter( product => product.inventory > 0 )           
        },
        cartProducts(state) {
            return state.cart.map(cartItem => {
                const product = state.products.find(
                    product => product.id === cartItem.id
                )
                return {
                        title: product.title,
                        price: product.price,
                        quantity: cartItem.quantity                            
                }
             })
        },
        cartTotal(state, getters) {
            let total = 0
            getters.cartProducts.forEach(p => {
                total += p.price * p.quantity
            })
            return total
        },
        productIsInStock() {
            // getters donot accept an argument so we can pass
            // the argument as function to getters
            return (product) => {
                return product.inventory > 0
            }
        }

    },
    actions: actions, //like methods 
    // responsible for state changes
    // never change the state directly in an action 
    mutations: { // setting and updating the single state
        //products is playload
        setProducts(state, products) {
            //update products which is the state 
            state.products = products
        },
        pushProductToCart(state, productId) {
            state.cart.push({
                id: productId,
                quantity: 1
            })
        },
        incrementItemQuantity(state, cartItem) {
            cartItem.quantity++
        },
        decrementProductInventory(state, product) {
            product.inventory--
        },
        emptyCart(state) {
            state.cart = []
        },
        setCheckoutStatus(state, status) {
            state.checkoutStatus = status
        }

    }

})

export default store;