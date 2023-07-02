import { createRouter, createWebHistory } from "vue-router";
import MarvelComics from '../views/MarvelComics.vue';
import DcComics from '../views/DcComics.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/marvel'
        },
        {
            path: '/marvel',
            name: 'MarvelComics',
            component: MarvelComics
        },
        {
            path: '/dc',
            name: 'DcComics',
            component: DcComics
        }
    ]
});

export default router