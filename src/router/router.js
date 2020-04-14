import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Topic from '@/views/Topic.vue'
import User from '@/views/User.vue'
import Vue from 'vue'
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Home   
    },
    {
        path:'/user/:id',
        component:User
    },
    {
        path:'/topic/:id',
        component:Topic
    }
]

const router = new VueRouter({
    routes
})

export default router