<template>
  <div>
    <Navbar></Navbar>
  <div class="page-header">
    <h1>Clientes <small>Subtext for header</small></h1>
    <button class="btn btn-primary" v-on:click="openAddUser()">Add User!</button>
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
        <tr v-for="item in listUsers">
            <th scope="row">{{item.id}}</th>
            <td>{{item.username}}</td>
            <td>{{ item.email }}</td>
            <td>
            <span class="label label-default">act</span>
            </td>
            <td>
            <button v-on:click="authUser(item._id)" class="btn btn-danger btn-xs">
                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
            </button>
            <button v-on:click="editMessage(item._id)" class="btn btn-success btn-xs">
                <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
            </button>
            </td>
        </tr>
    </table>
        </div>
    </div>
  </div>
  </div>
</template>
<script>
  import Navbar from './Navbar.vue'
  import swal from 'sweetalert2'

  export default {
    components: {'Navbar': Navbar },
    data() {
      return {
        listUsers: []
      }
    },
    created: function () {
      this.getUsers ();
    },
    methods: {
      getUsers () {
        this.$http.get('/api/users')
        .then(function(res){
                this.listUsers = res.data;
            })
      },
      openAddUser(){
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
            preConfirm: function () {
              return new Promise(function (resolve, reject) {
                  var user = document.getElementById('inputUser').value;
                  var email = document.getElementById('inputEmail').value;
                  var pass = document.getElementById('inputPassword').value;
                  if (email === '' || user==='' || pass == '') {
                    reject('Datos incompletos')
                  } else {
                    resolve()
                  }
              })
            },
            allowOutsideClick: false
          }).then(function () {
              var data = {
                      name: document.getElementById('inputUser').value,
                      email: document.getElementById('inputEmail').value,
                      password: document.getElementById('inputPassword').value
                  };
              this.addUser(data);                          
          })
      },
      addUser(data){
          this.$http.post('/register', data)
                    .then(function(res){
                              swal({
                                type: 'success',
                                title: 'Exito!',
                                html: 'El usuario se agrego correctamente'
                              })                    
                        }, function(response){
                              swal({
                                type: 'error',
                                title: 'Error!',
                                html: 'No se pudo grabar el usuario'
                              })
                    })
      }
    }
  }
</script>
