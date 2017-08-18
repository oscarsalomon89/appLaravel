<template>
    <form class="form-horizontal">
        <input type="hidden" v-bind:value="user.id" id="iduser" name="iduser">
        <div class="form-group">
        <label for="inputUser" class="col-sm-4 control-label">Usuario</label>
        <div class="col-sm-8">
            <input type="text" v-bind:value="user.name" class="form-control" id="inputUser" placeholder="Nombre usuario">
        </div>
        </div>
        <div class="form-group">
        <label for="inputEmail" class="col-sm-4 control-label">Email</label>
        <div class="col-sm-8">
            <input type="email" v-bind:value="user.email" class="form-control" id="inputEmail" placeholder="Email">
        </div>
        </div>
        <div class="form-group">
        <label for="inputPassword" value="" class="col-sm-4 control-label">Password</label>
        <div class="col-sm-8">
            <input type="password" value="" class="form-control" id="inputPassword" placeholder="Password">
        </div>
        </div>                      
    </form>
</template>
<script>
 export default {
    name: 'FormCliente',
    props: ['user']
 }
 </script>