import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index/Index'

import Home from '../pages/Index/home/Home'
import Category from '../pages/Index/category/Category'
import HeadLine from '../pages/Index/headline/HeadLine'
import Carts from '../pages/Index/carts/Carts'
import AboutMe from '../pages/Index/aboutme/AboutMe'

import Details from '../pages/details/Details'

Vue.use(VueRouter)

let routes = [
    {
        path:'/',
        redirect:'/home',
        component:Index,
        children:[
            {
                path:'/home',
                name:'home',
                component:Home,
            },
            {
                path:'/category',
                name:'category',
                component:Category,
            },
            {
                path:'/headline',
                name:'headline',
                component:HeadLine,
            },
            {
                path:'/carts',
                name:'carts',
                component:Carts,
            },
            {
                path:'/aboutme',
                name:'aboutme',
                component:AboutMe
            }
        ]
    },
    {
        path:'/details/:id',
        name:'details',
        component:Details
    }
]

export default new VueRouter({routes})