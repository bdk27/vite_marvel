<script setup>
    import { ref, onMounted, defineProps } from 'vue';
    import { useTMDBStore } from '../stores/tmdb';
   
    const tmdbStore = useTMDBStore();
    const data = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const posterImg = 'https://image.tmdb.org/t/p/original';
    //影視內容
    let isChecked = ref(false);
    let infoId = ref('');
    
    //router的query參數
    const props = defineProps(['queryParam']);

    function movieInfo(id) {
        if(infoId.value === id) {
            isChecked.value = !isChecked.value;
        } else {
            isChecked.value = false;
            infoId.value = id;
            isChecked.value = !isChecked.value;
        }    
    }

    onMounted(async () => {
        try {
            await tmdbStore.fetchData(props.queryParam.videoType, props.queryParam.company);
            data.value = tmdbStore.data;
            console.log(data.value);
            loading.value = false;
        } catch (error) {
            error.value = tmdbStore.message;
            loading.value = false;
        }
    });
</script>

<template>
    <div class="container">
        <!-- loading畫面 -->
        <div v-if="loading" class="d-flex align-items-center justify-content-center overflow-hidden">
            <div class="spinner-border me-3" role="status" style="width: 3rem; height: 3rem;">
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
                    <img :src='posterImg + item.poster_path' :alt="item.title">
                    <div class="card-body d-flex justify-content-end align-items-start flex-column">
                        <h5 class="card-title">{{ item.title || item.name }}</h5>
                        <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="7" aria-valuemin="0" aria-valuemax="100" style="height: 20px">
                            <div class="progress-bar progress-bar-striped" :style="{ width: item.vote_average * 10 + '%'}" :class="[item.vote_average * 10 < 70 ? 'scoreYellow' : 'scoreGreen']">{{ Math.floor(item.vote_average * 10) }}%</div>
                        </div>
                        <p class="date">上映日期: {{ item.release_date || item.first_air_date }}</p>
                        <div class="layer rounded" v-if="isChecked && infoId === item.id">
                            <p class="card-text">{{ item.overview }}</p>
                        </div>
                    </div>

                    <button @click="movieInfo(item.id)" :class="{infoOpacity: isChecked && infoId === item.id}">
                    <font-awesome-icon icon="fa-solid fa-circle-info" class="icon text-light"/> 
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .spinner-border {
        color: #FFAF60;
    }
    .card {
        height: 100%;
        position: relative;
        .card-body {
            .card-title {
                font-size: 2rem;
            }
            .progress {
                margin: 1rem 0 .5rem 0;
                width: 100%;
                .progress-bar {
                    color: #fff;
                    font-weight: bold;
                    font-size: 1.6rem; 
                }
            }
            .date {
                font-size: 1.6rem;
                color: gray;
            }
            .layer {
                position: absolute;
                height: 100%;
                left: 0;
                top: 0;
                transition: .5s;
                background: linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, .5));
                overflow: hidden;
                .card-text {
                    font-size: 1.6rem;
                    color: #fff;
                    margin: 2rem;
                }
            }
        }
        button {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: transparent;
            border: 0;
            .icon {
                font-size: 2.5rem;
            }
        }
    }
    //評分條顏色
    .scoreGreen {
        background-color: #12ca93;
    }
    .scoreYellow {
        background-color: #9fa42b;
    }
    //資訊按鈕透明度
    .infoOpacity {
        opacity: .5;
    }
</style>