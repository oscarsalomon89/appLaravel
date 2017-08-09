<template>
    <tr>
        <th scope="row">{{user.id}}</th>
        <td>{{user.name}}</td>
        <td>{{ user.email }}</td>
        <td>
        <span class="label label-default">{{ $store.state.count }}</span>
        </td>
        <td>
        <button @click="deleteUser(user.id)" class="btn btn-danger btn-xs">
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button>
        <button @click="editarUsuario(user)" class="btn btn-success btn-xs">
            <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
        </button>
        </td>
    </tr>
</template>
<script>
import swal from 'sweetalert2'

 export default {
    name: 'Cliente',
    props: ['user'],
    data() {
        return {
            editing: false
        }
    },
    methods: {
        deleteUser(user){
            var data = { id: user };
            let vm = this;

            swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Submit',
                showLoaderOnConfirm: true,
                preConfirm: function () {
                    return new Promise(function (resolve, reject) {
                        vm.$store.dispatch('deleteClient',data)
                            .then(function(res){
                                    resolve(); 
                                    vm.$store.dispatch('getAllClients')          
                                }, function(response){
                                if (response.status ==422){
                                    
                                }
                            })
                    })
                },
                allowOutsideClick: false
                }).then(function (email) {
                swal({
                    type: 'success',
                    title: 'Exito!',
                    html: 'Cliente eliminado'
                })
                })

            
        },
        editarUsuario(user){
            document.getElementById('inputUser').value = user.name;
            document.getElementById('inputEmail').value = user.email;
            document.getElementById('inputPassword').value = '';
            $('#myModal').modal('show');
        },
        editUser (user) {
            let vm = this;
            var form = '<form class="form-horizontal">'
                        +'<div class="form-group">'
                        +'<label for="inputUser" class="col-sm-4 control-label">Usuario</label>'
                        +'<div class="col-sm-8">'
                            +'<input type="text" value="'+user.name+'" class="form-control" id="inputUser" placeholder="Nombre usuario">'
                        +'</div>'
                        +'</div>'
                        +'<div class="form-group">'
                        +'<label for="inputEmail" class="col-sm-4 control-label">Email</label>'
                        +'<div class="col-sm-8">'
                            +'<input type="email" value="'+user.email+'" class="form-control" id="inputEmail" placeholder="Email">'
                        +'</div>'
                        +'</div>'
                        +'<div class="form-group">'
                        +'<label for="inputPassword" class="col-sm-4 control-label">Password</label>'
                        +'<div class="col-sm-8">'
                            +'<input type="password" value="" class="form-control" id="inputPassword" placeholder="Password">'
                        +'</div>'
                        +'</div>'                        
                    +'</form>';
            swal({
                title: 'Editar Cliente',
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
            })
        },
        cancelEdit (e) {
            e.target.value = this.todo.text
            this.editing = false
        }
    }
 }
</script>