import { defineStore } from "pinia";
import APIconfig from '../js/authorization';

export const useTMDBStore = defineStore('tmdb', {
    state: () => ({
        data: [],
        foxMovieIds: ['340102','567604','383498','9480','9947','9738','1979','166424'],
        marvelMovieIds: ['36647','36586','1927','7220','36648','13056'],
        sonyMovieIds: ['1250'],
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
        async fetchData(videoType, company, foxMovieIds = this.foxMovieIds, marvelMovieIds = this.marvelMovieIds, sonyMovieIds = this.sonyMovieIds) {
            try {
                //查詢單一電影id
                if(company === '431,25') {
                    await this.fetchMovieIds(foxMovieIds);
                }else if(company === '420') {
                    await this.fetchMovieIds(marvelMovieIds);
                }else if(company === '14439|326') {
                    await this.fetchMovieIds(sonyMovieIds);
                }

                const allData = [];
                let page = 1;
                
                //搜尋多頁面
                while(true) {
                    const url = `https://api.themoviedb.org/3/discover/${videoType}?language=zh-TW&sort_by=primary_release_date.desc&with_companies=${company}&page=${page}`;
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

                //調整電影、影集
                if(videoType === 'movie') {
                    if(company === '420') {
                        const deleteMovie = filteredData.filter(item => item.id !== 559 && item.id !== 1979 && item.id !== 1250);
                        const marvelMovie = [...this.data, ...deleteMovie];
                        marvelMovie.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
                        this.data = marvelMovie;
                    }else if(company === '431,25') {
                        const foxMovie = [...this.data, ...filteredData];
                        foxMovie.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
                        this.data = foxMovie;
                    }else if(company === '14439|326'){
                        const deleteMovie = filteredData.filter(item => item.id !== 335787 && item.id !== 315837 && item.id !== 132363 && item.id !== 10048);
                        const sonyMovie = [...this.data, ...deleteMovie];
                        sonyMovie.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
                        this.data = sonyMovie;
                    }else {
                        this.data = filteredData;
                    }
                }else if(videoType === 'tv') {
                    if(company === '420|7505|38679|13252') {
                        const marvelTV = filteredData.filter(item => item.id !== 67195 && item.id !== 69629 && item.id !== 202555);
                        this.data = marvelTV;
                    }else {
                        this.data = filteredData;
                    }
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