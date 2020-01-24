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
            <v-btn color="primary" v-on:click="addProductToCart(product)"> Add To Cart </v-btn>
            </li>
        </ul>
    
    </div>
</template>

<script>
export default {
    data(){
        return{
            loading: true
        }

    },
    computed:{
        products(){
            // repalce store with this.$store cuz it is global
            return this.$store.getters.availableProducts
        }
    }, 

    methods: {
        addProductToCart(product){
            this.$store.dispatch('addProductToCart', product)
        }
    },

    created(){
        this.loading = true
        // trigger action in store 
          // repalce store with this.$store cuz it is global
          this.$store.dispatch('fetchProducts')  
              .then(() => this.loading = false)
    }    
}
</script>

<style lang="" scoped>
    
</style>