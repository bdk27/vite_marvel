<script setup>
    import { ref, onMounted } from 'vue';
    import APIconfig from '../js/authorization';

    const data = ref([]);
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
            const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=primary_release_date.desc&with_companies=420&with_keywords=marvel&page=${page}`;

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

            return allData;
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
   <!--  {{ data }} -->
    <ul>
        <li v-for="item in data" :key="item.id">
            {{ item.original_title }}
        </li>
    </ul>
</template>

<style lang="scss" scoped>

</style>