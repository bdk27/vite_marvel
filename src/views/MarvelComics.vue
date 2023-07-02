<script setup>
    import { ref, onMounted } from 'vue';
    import APIconfig from '../js/authorization';

    const data = ref([]);
    let posterImg = 'https://image.tmdb.org/t/p/original';
    //取得TMDB資料
    function getData() {

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${APIconfig.apiKey}`
            }
        };

        /* fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=primary_release_date.asc&with_companies=420&with_keywords=marvel', options)
        .then(response => response.json())
        .then(response => data.value = response.results)
        .catch(err => console.error(err)); */

        async function fetchData(page) {
            const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=zh-TW&sort_by=primary_release_date.desc&with_companies=420&with_keywords=marvel&page=${page}`;

            const response = await fetch(url, options);
            const responseData = await response.json();

            return responseData.results;
        }
        async function fetchAllPages() {
            let currentPage = 1;
            const allData = [];

            while (true) {
                const results = await fetchData(currentPage);

                if (!results || results.length === 0) {
                    break;
                }

                allData.push(...results);
                currentPage ++;
            }
            //過濾沒有圖片的項目
            const filteredData = allData.filter(item => item.overview !== '');

            return filteredData;
        }

        fetchAllPages()
            .then(results => {
                data.value = results;
                console.log(data.value);
            })
            .catch(error => {
                console.error(error);
            });
    }

    onMounted(() => {
        getData();
    });
    

    
</script>

<template>
    <div class="container">
        <div class="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-5">
            <div class="card-container" v-for="item in data" :key="item.id">
                <div class="card">
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