<template>
  <div>
    <Navbar></Navbar>
  <div class="page-header">
    <h1>Clientes <small>Subtext for header</small></h1>
    <button class="btn btn-primary" v-on:click="openAddUser()">Add User!</button>
    <p v-show="addStatus">Checkout {{ addStatus }}.</p>
    <div class="row">
      <div class="col-md-3">

      </div>
      <div class="col-md-6">
          <table class="table table-bordered">
            <tr>
                <th>#</th>
                <th>User</th>
                <th>Email</th>
                <th>Auth</th>
                <th></th>
            </tr>
            <cliente v-for="item in listUsers" :user="item" :key="item._id"></cliente>            
          </table>
        </div>
    </div>
  </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import Navbar from './Navbar.vue'
  import Cliente from './Cliente.vue'
  import swal from 'sweetalert2'

  export default {
    components: {Navbar, Cliente},
      computed: mapGetters({
        listUsers: 'allClients',
        addStatus: 'addStatus'
      }),
      created () {
        this.$store.dispatch('getAllClients')
      },
    methods: {
      openAddUser(){
        let vm = this;
        var form = '<form class="form-horizontal">'
                    +'<div class="form-group">'
                      +'<label for="inputUser" class="col-sm-4 control-label">Usuario</label>'
                      +'<div class="col-sm-8">'
                        +'<input type="text" class="form-control" id="inputUser" placeholder="Nombre usuario">'
                      +'</div>'
                    +'</div>'
                    +'<div class="form-group">'
                      +'<label for="inputPassword" class="col-sm-4 control-label">Password</label>'
                      +'<div class="col-sm-8">'
                        +'<input type="password" class="form-control" id="inputPassword" placeholder="Password">'
                      +'</div>'
                    +'</div>'
                    +'<div class="form-group">'
                      +'<label for="inputEmail" class="col-sm-4 control-label">Email</label>'
                      +'<div class="col-sm-8">'
                        +'<input type="email" class="form-control" id="inputEmail" placeholder="Email">'
                      +'</div>'
                    +'</div>'
                  +'</form>';
        swal({
            title: 'Nuevo Cliente',
            html: form,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            showLoaderOnConfirm: true,
            allowOutsideClick: false,
            preConfirm: function () {
              return new Promise(function (resolve, reject) {
                  var user = document.getElementById('inputUser').value;
                  var email = document.getElementById('inputEmail').value;
                  var pass = document.getElementById('inputPassword').value;
                  if (email === '' || user==='' || pass == '') {
                    reject('Datos incompletos')
                  } else {
                    var data = {
                        name: document.getElementById('inputUser').value,
                        email: document.getElementById('inputEmail').value,
                        password: document.getElementById('inputPassword').value
                        };

                        vm.$store.dispatch('addClient', data)

                        if(vm.addStatus == 'successful'){
                          resolve();
                          vm.$store.dispatch('getAllClients')
                        }else{
                          reject('error');
                        }
                      /*vm.$http.post('api/register', data)
                          .then(function(res){
                                resolve();
                                vm.getUsers();             
                              }, function(response){
                                if (response.status ==422){
                                    reject(response.body.email[0]);
                                }
                          })*/
                  }
              })
            }         
          }).then(function() {
              swal({
                    type: 'success',
                    title: 'Exito!',
                    html: 'El usuario se agrego correctamente'
                  })                         
          })
      }      
    }
  }
</script>
