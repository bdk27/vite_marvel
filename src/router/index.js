import { createRouter, createWebHistory } from "vue-router";
import MarvelComics from '../views/MarvelComics.vue';
import DcComics from '../views/DcComics.vue';
import MarvelMovie from '../views/MarvelMovie.vue';
import MarvelTV from '../views/MarvelTV.vue';
import DcMovie from '../views/DcMovie.vue';
import DcTV from '../views/DcTV.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: '/marvel/movie'
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
        }
    ]
});

export default router