<template>
    <div id="wraper" class="container">
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
