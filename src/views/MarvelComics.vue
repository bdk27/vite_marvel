<script setup>
    import { ref, onMounted } from 'vue';
    import { useTMDBStore } from '../stores/tmdb';
   
    const tmdbStore = useTMDBStore();
    const data = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const posterImg = 'https://image.tmdb.org/t/p/original';

    onMounted(async () => {
        try {
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
        <!-- loading畫面 -->
        <div v-if="loading" class="d-flex align-items-center justify-content-center overflow-hidden">
            <div class="spinner-border me-3 text-danger" role="status" style="width: 3rem; height: 3rem;">
                <span class="visually-hidden">Loading...</span>
            </div> 
            <h1>載入中...</h1>
        </div>
        
        <!-- 錯誤畫面 -->
        <h1 v-else-if="error" class="text-center">Error: {{ error }},請按F5重新整理</h1>

        <!-- 成功畫面 -->
        <div v-else class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-5">
            <div v-for="item in data" :key="item.id">
                <div class="card shadow" >
                    <img :src='posterImg + item.poster_path' :alt="item.title" style="height: 100%">
                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="7" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
                            <div class="progress-bar progress-bar-striped" :style="{ width: item.vote_average * 10 + '%'}" :class="[item.vote_average * 10 < 70 ? 'scoreYellow' : 'scoreGreen']">{{ item.vote_average * 10 }}%</div>
                        </div>
                        <p>上映日期: {{ item.release_date }}</p>
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
        .card-body {
            .card-title {
                font-size: 2rem;
            }
            .progress {
                margin: 1rem 0 1rem 0;
                .progress-bar {
                    color: #fff;
                    font-weight: bold;
                    font-size: 1.6rem;
                }
            }
            p {
                font-size: 1.6rem;
                color: gray;
            }
        }
    }
    .scoreGreen {
        background-color: #12ca93;
    }
    .scoreYellow {
        background-color: #9fa42b;
    }
</style>