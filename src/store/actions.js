import shop from '../api/shop'
export default {
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
       // if (product.inventory > 0) {
        // replace it
        if(context.getters.productIsInStock(product)){
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
}