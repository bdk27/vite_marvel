import { createRouter, createWebHistory } from "vue-router";
//Marvel
import MarvelComics from '../views/Marvel/MarvelComics.vue';
import MarvelMovie from '../views/Marvel/MarvelMovie.vue';
import MarvelTV from '../views/Marvel/MarvelTV.vue';
//DC
import DcComics from '../views/DC/DcComics.vue';
import DcMovie from '../views/DC/DcMovie.vue';
import DcTV from '../views/DC/DcTV.vue';
//FOX
import FoxComics from '../views/Fox/FoxComics.vue';
import FoxMovie from '../views/Fox/FoxMovie.vue';
import FoxTV from '../views/Fox/FoxTV.vue';

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
            component: MarvelComics,
            children: [
                {
                    path: 'movie',
                    name: 'MarvelMovie',
                    component: MarvelMovie,
                },
                {
                    path: 'tv',
                    name: 'MarvelTV',
                    component: MarvelTV,
                },

            ]
        },
        {
            path: '/dc',
            name: 'DcComics',
            component: DcComics,
            children: [
                {
                    path: 'movie',
                    name: 'DcMovie',
                    component: DcMovie,
                },
                {
                    path: 'tv',
                    name: 'DcTV',
                    component: DcTV,
                },

            ]
        },
        {
            path: '/fox',
            name: 'FoxComics',
            component: FoxComics,
            children: [
                {
                    path: 'movie',
                    name: 'FoxMovie',
                    component: FoxMovie,
                },
                {
                    path: 'tv',
                    name: 'FoxTV',
                    component: FoxTV,
                },

            ]
        }
    ]
});

export default router