<script setup>
    import { ref, onMounted } from 'vue';
    import { useTMDBStore } from '../stores/tmdb';
   
    const tmdbStore = useTMDBStore();
    const data = ref([]);
    const loading = ref(false);
    const error = ref(null);
    const posterImg = 'https://image.tmdb.org/t/p/original';

    onMounted(async () => {
        try {
            loading.value = true;
            await tmdbStore.fetchData();
            data.value = tmdbStore.data;
            console.log(data.value);
            loading.value = false;
        } catch (error) {
            error.value = error.message;
            loading.value = false;
        }
    });
</script>

<template>
    <div class="container">
        <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-5">
            <h1 v-if="loading">Loading...</h1>
            <h1 v-else-if="error">Error: {{ error }}</h1>
            <div v-else class="card-container" v-for="item in data" :key="item.id">
                <div class="card shadow">
                    <img :src='posterImg + item.poster_path' :alt="item.title">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p>{{ item.vote_average }}</p>
                        <p>{{ item.release_date }}</p>
                        <!-- <p class="card-text">{{ item.overview }}</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card {
        height: 100%;
        .card-title {
            font-size: 2rem;
        }
    }
</style>