import { defineStore } from "pinia";
import APIconfig from '../js/authorization';

export const useTMDBStore = defineStore('tmdb', {
    state: () => ({
        data: [],
       /*  bgCompany: 'marvel', */ //根據公司更換圖片
        marvelTvShowIds: ['114695','88987','66190','67466','67178','68716','62285','62127','62126','38472','61889','61550','1403'],
        dcMovieIds: ['565770','298618','594767','436270','414906','436969','791373','464052','495764','475557','287947','297802','141052','297762','297761','209112','49521','49026','44912','155','272'],
        dcTvShowIds: ['195868','110492','95057','75450','62643','62688','60735','60708','1412','4604'],
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
        async fetchData(videoType = 'movie', company = '420', marvelTvShowIds = this.marvelTvShowIds, dcMovieIds = this.dcMovieIds, dcTvShowIds = this.dcTvShowIds) {
            try {
                //判斷公司和類型
                if(company === '420' && videoType === 'tv') {
                    /* this.bgCompany = 'marvel'; */
                    await this.searchIds('tv', marvelTvShowIds);
                }else if(company === '429') {
                    /* this.bgCompany = 'dc'; */ //根據公司更換圖片
                    if(videoType === 'movie') {
                        await this.searchIds('movie', dcMovieIds);
                        return 0;
                    }else {
                        await this.searchIds('tv', dcTvShowIds);
                        return 0;
                    }
                }
                
                const allData = [];
                let page = 1;
                
                //搜尋多頁面
                while(true) {
                    const url = `https://api.themoviedb.org/3/discover/${videoType}?include_adult=false&include_video=false&language=zh-TW&sort_by=primary_release_date.desc&with_companies=${company}&page=${page}`;
                    const response = await fetch(url, this.options);
                    const responseData = await response.json();
                    const results = responseData.results;
                    console.log(results)

                    if (!results || results.length === 0) {
                        break;
                    }

                    allData.push(...results);
                    page ++;
                }
                //過濾沒有圖片的項目
                const filteredData = allData.filter(item => item.overview !== '');
                
                if(company === '420') {
                    if(videoType === 'movie') {
                        this.data = filteredData;
                    }else if(videoType === 'tv') {
                        this.data = [...filteredData, ...this.data];
                    }
                }
                
            } catch(error) {
                this.error = error.message;
            }
        },
        async searchIds(type, ids) {
            try {
                const allData = [];

                for (const id of ids) {
                    const url = `https://api.themoviedb.org/3/${type}/${id}?language=zh-TW`;
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