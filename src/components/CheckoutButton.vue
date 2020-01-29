<template>
    <div>
          <h1>Cart Total So far: </h1>
          <v-btn color= "success"
                >{{total | currency}}
          </v-btn>
          <v-btn  color='warning'                
          v-on:click="checkout">Checkout
          </v-btn> 
          <span v-if="checkoutStatus">{{checkoutStatus}}</span> 
    
    </div>
</template>

<script>
import { mapGetters, mapActions, mapState} from 'vuex'
export default {
    
  computed:{
    
        // cartTotal(){
        //     return this.$store.getters.cartTotal
        // },
        //   checkout(){ 
        //     return this.$store.dispatch('checkout')
        // }

        ...mapGetters({
           total: 'cartTotal'
        }),
        ...mapActions({
          checkout: 'checkout'
        }),
        ...mapState({
          checkoutStatus: state => state.checkoutStatus
         
        })
  }
}
</script>