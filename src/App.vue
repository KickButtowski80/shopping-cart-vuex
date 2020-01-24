<template>
  <v-app>
    <v-content>
      <ProductList></ProductList>
    </v-content>
  </v-app>
</template>

<script>
import ProductList from './components/ProductList';

export default {
  name: 'App',

  components: {
    ProductList,
  },

  data: () => ({
    //
  }),
};
</script>
