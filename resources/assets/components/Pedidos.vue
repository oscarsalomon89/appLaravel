<template>
  <div class="prod">
    <Navbar></Navbar>
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import Cart from './Cart.vue'
import Navbar from './Navbar.vue'

export default {
  components: { ProductList, Cart, Navbar }
}
</script>