import Vue from 'vue';
import VueRouter from 'vue-router';
import HqIndex from '../views/HqIndex.vue';
import HqAbout from '../views/HqAbout.vue';


const routes = [
    {
        path:'*',
        redirect:'/index'
    },
    {
        path:'/index',
        component:HqIndex,
    },

    {
        path:'/about',
        component:HqAbout,
    }
]

const routerConfig = {
    mode:'history',
    routes:routes,
}

//开启使用VueRouter
Vue.use(VueRouter);

const  Router = new VueRouter(routerConfig);

module.exports  = Router;

