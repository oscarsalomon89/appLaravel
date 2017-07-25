<template>
<div>
  <Navbar></Navbar>
  <!-- Default panel contents -->
  <div class="panel-heading">Panel heading</div>
  <p>{{ $store.state.count }} times, count is {{ evenOrOdd }}.</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
  <!-- List group -->
  <ul class="list-group">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Morbi leo risus</li>
    <li class="list-group-item">Porta ac consectetur ac</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
</template>
<script>
  import Navbar from './Navbar.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: { 'Navbar': Navbar },
    computed: mapGetters([
      'evenOrOdd'
    ]),
    methods: mapActions([
      'increment',
      'decrement',
      'incrementIfOdd',
      'incrementAsync'
    ])
  }
</script>
