<template>
    <tr>
        <th scope="row">{{user.id}}</th>
        <td>{{user.username}}</td>
        <td>{{ user.email }}</td>
        <td>
        <span class="label label-default">act</span>
        </td>
        <td>
        <button v-on:click="authUser(user._id)" class="btn btn-danger btn-xs">
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
        </button>
        <button v-on:click="editMessage(user._id)" class="btn btn-success btn-xs">
            <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
        </button>
        </td>
    </tr>
</template>
<script>
 export default {
    name: 'Cliente',
    props: ['user'],
    data() {
        return {
        editing: false
        }
    },
    methods: {

    }
 }
</script>