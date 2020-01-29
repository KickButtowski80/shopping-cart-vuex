<template>
  <v-app>
    <v-container >
      <v-row>
        <v-col>
             <checkout-info></checkout-info>       
        </v-col>
      </v-row>
      <v-row> 
        
        <v-col cols="6"><ProductList></ProductList></v-col>
        <v-col cols="6"><ShoppingCart></ShoppingCart></v-col>
      </v-row>
 
    </v-container >
      
  </v-app>
</template>

<script>

import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart'
import CheckoutButton from './components/CheckoutButton'
export default {
  name: 'App',

  components: {
    ProductList,
    ShoppingCart,
    'checkout-info' : CheckoutButton
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
 h1, h3{   
  display: inline-block;
 }
</style>