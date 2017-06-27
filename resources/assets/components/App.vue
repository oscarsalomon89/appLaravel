<template>
    <div id="wraper" class="container">
      <router-view></router-view>
    </div>
</template>
<script>
import auth from '../js/auth.js'
    export default {
        data() {
            return {
              listUsers: [],
              messageFinal: ''
            }
          },
        beforeCreate() {
            auth.check()
        }
    }
</script>
