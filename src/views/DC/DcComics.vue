<script setup>
    
</script>

<template>
    <div class="container d-flex align-items-center flex-column mt-5">
        <div class="row row-cols-lg-2 justify-content-center">
            <div class="col-6">
                <router-link to="/dc/movie?videoType=movie&company=128064%7C9993%7C429" custom v-slot="{ navigate }">
                    <button @click="navigate" role="link" class="link">電影</button>
                </router-link> 
            </div>
            <div class="col-6">
                <router-link to="/dc/tv?videoType=tv&company=128064%7C9993%7C429" custom v-slot="{ navigate }">
                    <button @click="navigate" role="link" class="link">影集</button>
                </router-link>
            </div>
        </div>

        <div class="intro">
            <div class="intro-logo">
               <img src="../../assets/img/DC_Comics_logo.png" alt="dc-logo"> 
            </div>
            <div class="intro-content">
                <p>DC41漫畫公司是一家美國漫畫書出版社，它是隸屬於華納兄弟探索旗下DC娛樂的出版事業單位</p>
                <a href="https://zh.wikipedia.org/zh-tw/DC%E6%BC%AB%E7%95%AB">#維基百科</a>
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