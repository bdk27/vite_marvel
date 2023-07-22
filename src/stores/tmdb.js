import { defineStore } from "pinia";
import APIconfig from '../js/authorization';

export const useTMDBStore = defineStore('tmdb', {
    state: () => ({
        data: [],
        marvelTvShowIds: ['114695','88987','66190','67466','67178','68716','62285','62127','62126','38472','61889','61550','1403'],
        error: null
    }),
    actions: {
        async fetchData(videoType = 'movie', company = 420, tvShowIds = this.marvelTvShowIds) {
            try {
                await this.fetchDataByTvShowIds(tvShowIds);

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
                
                if(videoType === 'tv') {
                    this.data = [...filteredData, ...this.data];
                }else {
                    this.data = filteredData;
                }
                
            } catch(error) {
                this.error = error.message;
                this.loading = false;
            }
        },
        async fetchDataByTvShowIds(tvShowIds) {
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${APIconfig.apiKey}`
                    }
                };

                const allData = [];

                for (const tvShowId of tvShowIds) {
                    const url = `https://api.themoviedb.org/3/tv/${tvShowId}?language=zh-TW`;
                    const response = await fetch(url, options);
                    const responseData = await response.json();
                    allData.push(responseData);
                }

                // 將新查詢的數據添加到現有的data中
                this.data = [...allData];
            } catch(error) {
                this.error = error.message;
            }
        }
    }
});