<template>
  <div>
    <Navbar></Navbar>
  <div class="page-header">
    <h1>Example page header <small>Subtext for header</small></h1>
    <div class="row">
      <div class="col-md-5">
        <form id="myForm">
          <input type="hidden" v-model="info.iduser">
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input type="text" class="form-control" v-model="info.user" placeholder="User">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Mensaje</label>
            <textarea v-on:keyup.enter="addMessage()" class="form-control" rows="3" v-model="info.message" placeholder="add multiple lines"></textarea>
          </div>
        </form>
        <br>
        <button class="btn btn-primary" v-on:click="addMessage()">Enviar Mensaje
        </button>
        <h2>Ultimo mensaje:</h2>
        <h3>{{messageFinal}}</h3>
      </div>
      <div class="col-md-7">
          <tableMessages :listMessages="listMessages"></tableMessages>
        </div>
    </div>
  </div>
  </div>
</template>
<script>
  import Navbar from './Navbar.vue';
  import Table from './Table.vue';

  export default {
    components: { 'tableMessages': Table,'Navbar': Navbar },
    data() {
      return {
        info: {
            user: '',
            message: '',
            iduser: ''
        },
        listMessages: [],
        messageFinal: ''
      }
    }
  }
</script>
