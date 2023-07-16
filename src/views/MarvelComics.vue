<script setup>
    import { useTMDBStore } from '../stores/tmdb';

    const tmdbStore = useTMDBStore();
</script>

<template>
    <div class="container">
        <button @click="tmdbStore.fetchData('movie', 420)">
            <router-link to="/marvel/movie">電影</router-link> 
        </button>
        <button @click="tmdbStore.fetchData('tv', 420)">
            <router-link to="/marvel/tv">影集</router-link>
        </button>

        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
</style>