<template>
  <v-app>
    <v-container >
      <v-row>
        <v-col><h1>Cart Total So far: </h1>
                <v-btn color= "success"
                      >{{cartTotal | currency}}</v-btn></v-col>
      </v-row>
      <v-row> 
        
        <v-col cols="6"><ProductList></ProductList></v-col>
        <v-col cols="6"><ShoppingCart></ShoppingCart>        </v-col>
      </v-row>
 
    </v-container >
      
  </v-app>
</template>

<script>
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart'
export default {
  name: 'App',

  components: {
    ProductList,
    ShoppingCart
  },

  data: () => ({
    //
  }),
  computed:{
    
        cartTotal(){
            return this.$store.getters.cartTotal
        }
  }
};
</script>

<style scoped>
 h1, h3{   
  display: inline-block;
 }
</style>