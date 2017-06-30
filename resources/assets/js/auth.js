import Vue from 'vue'
import router from './router'

export default {
    user: {
        authenticated: false,
        profile: null
    },
    check() {
        if (localStorage.getItem('id_token') !== null) {
            Vue.http.get(
                'api/user',
            ).then(response => {
                this.user.authenticated = true
                this.user.profile = response.data.data
            }, response => {
                localStorage.removeItem('id_token')
                this.user.authenticated = false
                this.user.profile = null

                router.push('login')
            })
        }else{
            router.push('login')
        }
    },
    islogin(to, from, next) {
        if (localStorage.getItem('id_token') !== null) {
            Vue.http.get(
                'api/user',
            ).then(response => {
                router.push('inicio')
            }, response => {
                next()
            })
        }else{
            next()
        }
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
    },
    signin(context, user, password) {
        Vue.http.post(
            'api/signin',
            {
                name: user,
                password: password
            }
        ).then(response => {
            context.error = false
            localStorage.setItem('id_token', response.data.meta.token)
            Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token')
            this.user.authenticated = true
            this.user.profile = response.data.data

            router.push('inicio')
        }, response => {
            context.error = true
        })
    },
    signout() {
        localStorage.removeItem('id_token')
        this.user.authenticated = false
        this.user.profile = null

        router.push('login')
    }
}
