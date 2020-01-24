import Vuex from 'vuex'
import Vue from 'vue'
import shop from '../api/shop'

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
        // },
        addProductToCart(context, product) {
            if (product.inventory > 0) {
                // item exist
                const cartItem = context.state.cart.find(item => item.id === product.id)
                if (!cartItem) {
                    //product be pushed to cart
                    context.commit('pushProductToCart', product.id)
                } else {
                    //inc item quantity
                    context.commit('incrementItemQuantity', cartItem)
                }

                context.commit('decrementProductInventory', product)
            } else {
                alert("no inventory for " + product.title)
                 
            }
        },
        checkout(context) {
            shop.buyProducts(
                context.state.cart,
                () => {
                    context.commit('emptyCart')
                    context.commit('setCheckoutStatus', 'success')
                },
                () => {
                    context.commit('setCheckoutStatus', 'failure')
                }
            )
            
        }
    },
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