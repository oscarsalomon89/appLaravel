<template>
    <div id="wraper" class="container">
    <p>
        <router-link to="/">Inicio</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/productos">Productos</router-link>
      </p>
    <router-view></router-view>
    </div>
</template>
<script>

    export default {
        data() {
            return {
              listUsers: [],
              messageFinal: ''
            }
          },
        methods: {        
            logout () {
                this.$http.get('/logout')
                .then(function(res){
                        
                    })
            }
        }
    }
</script>
