<template>
    <div>
        <template v-if="loading">        
        <img src="https://i.imgur.com/JfPpwOA.gif" alt="" >
            <h1>Loading Data</h1>
        </template>        
        <ul v-else>
            <h1>Product List</h1>
            <li v-for="product in products"
                v-bind:key = "product.name">
            {{product.title}}  -- {{product.price  | currency}} -- {{product.inventory}}
            <v-btn 
            color="primary" 
            v-on:click="addProductToCart(product)"
            v-bind:disabled = "!productIsInStock(product)"
                      > Add To Cart </v-btn>
            </li>
        </ul>
    
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
export default {
    data(){
        return{
            loading: true
        }

    },
    // computed:{
    //     products(){
    //         // repalce store with this.$store cuz it is global
    //         // return this.$store.getters.availableProducts
    //         return this.$store.state.products
    //     },
    //     productIsInStock(){
    //         return this.$store.getters.productIsInStock
    //     }
    // }, 
    computed:{
        ...mapState({
            products: state => state.products,
        }),
        ...mapGetters({
            productIsInStock: 'productIsInStock'
        }),
     
    }

    ,
    methods: {
        // addProductToCart(product){
        //     this.$store.dispatch('addProductToCart', product)
        // }
           ...mapActions({
            fetchProducts: 'fetchProducts',
            addProductToCart: 'addProductToCart'
        }),
    },

    created(){
        this.loading = true
        // trigger action in store 
          // repalce store with this.$store cuz it is global
          this.fetchProducts() 
              .then(() => this.loading = false)
    }    
}
</script>

<style lang="" scoped>
    
</style>