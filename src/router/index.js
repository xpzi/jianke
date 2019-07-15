import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index/Index'

import Home from '../pages/Index/home/Home'
import Category from '../pages/Index/category/Category'
import HeadLine from '../pages/Index/headline/HeadLine'
import Carts from '../pages/Index/carts/Carts'
import AboutMe from '../pages/Index/aboutme/AboutMe'
import Account from '../pages/account/Account'
import Login from '../pages/account/Login'
import Register from '../pages/account/Register'
import ForgetPwd from '../pages/account/ForgetPwd'
import Search from '../pages/search/Search'

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
                component:AboutMe,
            }
        ]
    },
    {
        path:'/details/:id',
        name:'details',
        component:Details
    },
    {
        path:'/search',
        name:'search',
        component:Search
    },
    {
        path:'/account',
        name:'account',
        redirect:'/account/login',
        component:Account,
        children:[
            {
                path:'/account/login',
                name:'login',
                component:Login,
            },
            {
                path:'/account/register',
                name:'register',
                component:Register,
            },
            {
                path:'/account/forgetpwd',
                name:'forgetpwd',
                component:ForgetPwd,
            },
        ]
    }
]

export default new VueRouter({routes})