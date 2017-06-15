<template>
<div class="panel panel-default">
  <!-- Default panel contents -->
  <div class="panel-heading">Panel heading</div>
  <div class="panel-body">
    <p>Esta es la historia de vue js</p>
  </div>

  <!-- List group -->
  <ul class="list-group">
    <li v-for="user in listUsers" class="list-group-item">{{user.name}} - {{user.email}}</li>
  </ul>
</div>
</template>

<script>
    import moment from "moment";

    export default {
        data() {
            return {
              listUsers: [],
              messageFinal: ''
            }
          },
        filters: {
            formatDate: function (value) {
                if (!value) return ''
                value = value.toString()
                return moment(value).format('MM/DD/YYYY hh:mm')
            }
        },
        created: function () {
          this.getUsers ();
        },
        methods: {        
            newUser (id) {
                this.$http.post('/api/removemessage',[id])
                .then(function(res){
                        this.$parent.getMessages();
                    })
            },
            editUser (id) {
                this.$parent.editMessage(id);                
            },
            getUsers () {
              this.$http.get('/api/users')
              .then(function(res){
                      this.listUsers = res.body;
                  })
              }
    }
    }
</script>