<template>
    <tr>
        <th scope="row">{{user.id}}</th>
        <td>{{user.username}}</td>
        <td>{{ user.email }}</td>
        <td>
        <span class="label label-default">{{ $store.state.count }}</span>
        </td>
        <td>
        <button @click="deleteUser({ user: user })" class="btn btn-danger btn-xs">
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button>
        <button @click="editUser(user._id)" class="btn btn-success btn-xs">
            <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
        </button>
        </td>
    </tr>
</template>
<script>
import { mapMutations } from 'vuex'

 export default {
    name: 'Cliente',
    props: ['user'],
    data() {
        return {
            editing: false
        }
    },
    methods: {
        /*...mapMutations([
            'editTodo',
            'toggleTodo',
            'deleteTodo'
            ]),*/
        doneEdit (e) {
            const value = e.target.value.trim()
            const { todo } = this
            if (!value) {
                this.$store.commit('deleteUser')({
                    todo
                })
            } else if (this.editing) {
                this.$store.commit('editUser')({
                    todo,
                    value
                })
                this.editing = false
            }
        },
        cancelEdit (e) {
            e.target.value = this.todo.text
            this.editing = false
        }
    }
 }
</script>