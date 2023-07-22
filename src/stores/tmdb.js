import { defineStore } from "pinia";
import APIconfig from '../js/authorization';

export const useTMDBStore = defineStore('tmdb', {
    state: () => ({
        data: [],
        error: null
    }),
    actions: {
        async fetchData(videoType = 'movie', company = 420) {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${APIconfig.apiKey}`
                    }
                };
                const allData = [];
                let page = 1;
                
                while(true) {
                    const url = `https://api.themoviedb.org/3/discover/${videoType}?include_adult=false&include_video=false&language=zh-TW&sort_by=primary_release_date.desc&with_companies=${company}&page=${page}`;
                    const response = await fetch(url, options);
                    const responseData = await response.json();
                    const results = responseData.results;

                    if (!results || results.length === 0) {
                        break;
                    }

                    allData.push(...results);
                    page ++;
                }
                //過濾沒有圖片的項目
                const filteredData = allData.filter(item => item.overview !== '');
                
                this.data = filteredData;
            } catch(error) {
                this.error = error.message;
                this.loading = false;
            }
        }
    }
});