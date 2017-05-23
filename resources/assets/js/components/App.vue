<template>
    <div class="container">
        <nav id="mainNav" class="navbar navbar-default">
        <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
                </button>
                <a class="navbar-brand page-scroll" href="/">V.S REPUESTOS S.R.L</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link class="page-scroll" to="/usuarios">usuarios</router-link>            
                    </li>
                    <li>
                        <router-link class="page-scroll" to="/productos">Productos</router-link>
                    </li>
                    <li>
                        <a class="page-scroll" href="#portfolio">Portfolio</a>
                    </li>
                            <li><a href="login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                            <li class="dropdown">
                <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Dropdown <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Config</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a v-on:click="logout()">Logout</a></li>
                </ul>
              </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
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
