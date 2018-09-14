
//使用这种方式会在index.html的中自动插入<style>标签
// import './style.css';

import Vue from 'vue';



//添加vue-router
import App from './App.vue';
import router from './router/router';
new Vue({
    el: '#app',
    router:router,
    render: h => {
        return h(App)
    }
});



/*
//基本
import HqApp from './HqApp.vue';
new Vue({
    el: '#app',
    render: h => {
        return h(HqApp)
    }
});
*/