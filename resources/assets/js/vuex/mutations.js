//inicializamos el estado de los users
export const state = {
    users: [],
    count: 0
}
 
export const mutations = {
    //obtener usuarios
    increment (state) {
        state.count++
    },

    decrement (state) {
        state.count--
    },

    //añadir un user
    adduser (state, { text }) {
        state.users.push({
            text,
            done: false
        })
    },
 
    //eliminar un user
    deleteUser (state, { user }) {
        state.users.splice(state.users.indexOf(user), 1)
    },
 
    //cambiar el estado de un user
    toggleuser (state, { user }) {
        user.done = !user.done
    },
 
    //editar un user
    edituser (state, { user, value }) {
        user.text = value
    },
 
    //cambiar el estado de users los users
    toggleAll (state, { done }) {
        state.users.forEach((user) => {
            user.done = done
        })
    },
 
    //eliminar los users que tengan done === true
    clearCompleted (state) {
        state.users = state.users.filter(user => !user.done)
    }
}