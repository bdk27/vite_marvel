<script setup>
    
</script>

<template>
    <div class="container d-flex align-items-center flex-column mt-5">
        <div class="row row-cols-lg-2 justify-content-center">
            <div class="col-6">
                <router-link to="/fox/movie?videoType=movie&company=431%2C25" custom v-slot="{ navigate }">
                    <button @click="navigate" role="link" class="link">電影</button>
                </router-link> 
            </div>
            <div class="col-6">
                <router-link to="/fox/tv?videoType=tv&company=431" custom v-slot="{ navigate }">
                    <button @click="navigate" role="link" class="link">影集</button>
                </router-link>
            </div>
        </div>

        <div class="intro">
            <div class="intro-logo">
               <img src="../../assets/img/20th_century_fox_29.webp" alt="fox-logo"> 
            </div>
            <div class="intro-content">
                <p>二十世紀福斯影片公司是美國最主要的電影、電視節目發行和製作公司之一，總部座落在美國加州洛杉磯比佛利山莊西側的世紀城。曾是新聞集團的一個子公司，現屬於福斯娛樂集團的21世紀福斯旗下</p>
                <a href="https://zh.wikipedia.org/zh-tw/%E7%A6%8F%E5%85%8B%E6%96%AF%E7%94%B5%E5%BD%B1%E5%85%AC%E5%8F%B8">#維基百科</a>
            </div>
        </div>

        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
    @import '../../scss/_button.scss';
    @import '../../scss/_intro.scss';

    .link {
        font-weight: bold;
        padding: 1rem 2rem;
        &:hover {
            color: #FFAF60;
        }
    }
</style>