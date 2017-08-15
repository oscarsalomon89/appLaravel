<template>
  <div>
    <Navbar></Navbar>
  <div class="page-header">
    <h1>Clientes <small>Subtext for header</small></h1>
    <button class="btn btn-primary" v-on:click="openAddUser()">Add User!</button>
    <button type="button" class="btn btn-primary" v-on:click="openAddUser()" data-target="#myModal">
  Add User modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">{{titulo}}</h4>
      </div>
      <div class="modal-body">
        <FormCliente v-show="showForm"></FormCliente>
        <p v-show="!showForm" id="mensajes"></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" v-show="showForm" @click="addUser()" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    
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
              showForm: true,
              titulo: 'Nuevo Usuario'
          }
      },
      created () {
        this.$store.dispatch('getAllClients')
      },
    methods: {
      openAddUser(){
        this.showForm = true;
        document.getElementById('iduser').value = 0;
        document.getElementById('inputUser').value = '';
        document.getElementById('inputEmail').value = '';
        document.getElementById('inputPassword').value = '';
        document.getElementById('mensajes').innerHTML = '';
        $('#myModal').modal('show');
      },
      addUser(){
          let vm = this;
          var id   = document.getElementById('iduser').value;
          var user = document.getElementById('inputUser').value;
          var email = document.getElementById('inputEmail').value;
          var pass = document.getElementById('inputPassword').value;          

          if (email === '' || user==='' || pass == '') {
            document.getElementById('mensajes').innerHTML = 'Datos incompletos';
          } else {
            var data = {
                name: user,
                email: email,
                password: pass
                };

                if(id>0){
                  this.updateUser(data,id);
                  return;
                }

                this.$store.dispatch('addClient', data)
                    .then(function(res){
                        vm.showForm = false;//oculta el form
                        document.getElementById('mensajes').innerHTML = 'Usuario agregado con exito';
                        //if (res.status == 422){
                          //  document.getElementById('mensajes').innerHTML = response.body.email[0];
                        //}else{
                            //var mymodal = $('#myModal');
                            //mymodal.find('.modal-body').text('Usuario agregado con exito');
                        //}                                   
                      }, function(response){
                        alert('error');
                  })
          }
      },
      updateUser(user,id){
          user.id = id;
          this.$store.dispatch('updateClient', user)
              .then(function(res){
                  vm.showForm = false;//oculta el form
                  document.getElementById('mensajes').innerHTML = 'Usuario editado con exito';                                 
                }, function(response){
                  alert('error');
            })
      }      
    }
  }
</script>
