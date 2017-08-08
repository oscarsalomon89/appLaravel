<template>
  <div>
    <Navbar></Navbar>
  <div class="page-header">
    <h1>Clientes <small>Subtext for header</small></h1>
    <button class="btn btn-primary" v-on:click="openAddUser()">Add User!</button>
    <FormCliente v-show="showForm"></FormCliente>
    <p v-show="addStatus">Checkout {{ addStatus }}.</p>
    <div class="row">
      <div class="col-md-3">

      </div>
      <div class="col-md-6 jumbotron">
          <table class="table table-striped">
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
  import FormCliente from './FormCliente.vue'
  import swal from 'sweetalert2'

  export default {
    components: {Navbar, Cliente, FormCliente},
      computed: mapGetters({
        listUsers: 'allClients',
        addStatus: 'addStatus'
      }),
      data() {
          return {
              showForm: false
          }
      },
      created () {
        this.$store.dispatch('getAllClients')
      },
    methods: {
      openAddUser(){
        let vm = this;
        vm.showForm = true;
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
                            .then(function(res){
                                resolve();           
                              }, function(response){
                                if (response.status ==422){
                                    reject(response.body.email[0]);
                                }
                          })
                  }
              })
            }         
          }).then(function() {
              swal({
                    type: 'success',
                    title: 'Exito!',
                    html: 'El usuario se agrego correctamente'
                  })                         
          }).catch(swal.noop);
      }      
    }
  }
</script>
