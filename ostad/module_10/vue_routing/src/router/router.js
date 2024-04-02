import {createRouter, createWebHistory} from 'vue-router';

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Contact from '../components/Contact.vue'
import Blog from '../components/Blog.vue'
import RightSidebar from '../components/RightSidebar.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/about',
        component: About,
        name: 'about'
    },
    {
        path: '/contact',
        component: Contact,
        // name: 'contact'
    },
    {
        path: '/blog',
        components:{
            default: Blog,
            right: RightSidebar
        },
        // name: 'blog'
    },
    {
        path: '/blog/tag/:tag',     // :tag use for pass dynamic url
        components:{
            default: Blog,
            right: RightSidebar
        },
        name: 'category'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router