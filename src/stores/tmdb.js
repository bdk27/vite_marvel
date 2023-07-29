import { defineStore } from "pinia";
import APIconfig from '../js/authorization';

export const useTMDBStore = defineStore('tmdb', {
    state: () => ({
        data: [],
        foxMovieIds: ['340102','567604','383498'],
        options: {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${APIconfig.apiKey}`
            }
        },
        error: null
    }),
    actions: {
        async fetchData(videoType, company, keywords, without_keywords) {
            try {
                console.log(company);
                /* if(company === '431,25') {
                    await this.fetchMovieIds(movieIds);
                    console.log(this.data);
                } */

                const allData = [];
                let page = 1;
                
                //搜尋多頁面
                while(true) {
                    const url = `https://api.themoviedb.org/3/discover/${videoType}?language=zh-TW&sort_by=primary_release_date.desc&with_companies=${company}&with_keywords=${keywords}&without_keywords=${without_keywords}&page=${page}`;
                    const response = await fetch(url, this.options);
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

                if(company === '420|7505|38679|13252' && videoType === 'tv') {
                    const test = filteredData.filter(item => item.id !== 67195 && item.id !== 69629);
                    this.data = test;
                }else {
                    this.data = filteredData;
                }
                
                
            } catch(error) {
                this.error = error.message;
            }
        },
        async fetchMovieIds(movieIds) {
            try {
                const allData = [];

                for (const movieId of movieIds) {
                    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=zh-TW`;
                    const response = await fetch(url, this.options);
                    const responseData = await response.json();
                    allData.push(responseData);
                }

                // 將新查詢的數據添加到現有的data中
                this.data = [...allData];
            } catch(error) {
                this.error = error.message;
            }
        },   
    }
});