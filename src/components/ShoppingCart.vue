<template>
    <div>
       <h1> Shopping Cart List</h1>
       <ul>
        
           <li v-for="cartItem in findProudcts" v-bind:key="cartItem.title">
               <v-card
                >
                    <v-card-text>
                    <div>Title</div>
                    <p class="display-1 text--primary">
                       {{cartItem.title}}
                    </p>
                    <p>Quantity</p>
                    <div class="text--primary">
                        {{cartItem.quantity}}
                    </div>
                    <div>
                       {{cartItem.price}}
                    </div>
                    </v-card-text>               
                </v-card>
           
           </li>
       </ul>
    
    </div>
</template>

<script>
export default {
    methods:{
        // move this to getters with more info
        //move the getters to computed
        // findProduct(id){
        //    return this.$store.state.products.find( p => p.id == id)
        // }
        
    },
    computed:{
        cartItems(){            
            return this.$store.state.cart
        },
        findProudcts(){
            return this.$store.getters.cartProducts
        },
     
    }
    
}
</script>

<style scoped>

</style>