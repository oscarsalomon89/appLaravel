import Vue from 'vue'
import router from './router'

export default {
    user: {
        authenticated: false,
        profile: null
    },
    register(context, name, email, password) {
        Vue.http.post(
            'api/register',
            {
                name: name,
                email: email,
                password: password
            }
        ).then(response => {
            context.success = true
        }, response => {
            context.response = response.data
            context.error = true
        })
    }
}
