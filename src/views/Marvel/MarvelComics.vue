<script setup>
</script>

<template>
    <div class="container d-flex align-items-center flex-column mt-5">
        <div class="row row-cols-lg-2 justify-content-center">
            <div class="col-6">
                <router-link to="/marvel/movie?videoType=movie&company=420" custom v-slot="{ navigate }">
                    <button @click="navigate" role="link" class="link">電影</button>
                </router-link> 
            </div>
            <div class="col-6">
                <router-link to="/marvel/tv?videoType=tv&company=420%7C7505%7C38679%7C13252" custom v-slot="{ navigate }">
                    <button @click="navigate" role="link" class="link">影集</button>
                </router-link>
            </div>
        </div>

        <div class="intro">
            <div class="intro-logo">
               <img src="../../assets/img/Marvel_Logo.png" alt="marvel-logo"> 
            </div>
            <div class="intro-content">
                <p>漫威電影宇宙是由漫威影業基於漫威漫畫的出版物中的虛構角色獨立製作的一系列電影所構成的一個架空世界和共同世界。該共同世界和漫畫中的漫威宇宙一樣由共同的元素、設定、表演和角色通過跨界作品所建立，並且與其它影視作品和動畫等系列同屬一個被官方認可的多元宇宙</p>
                <a href="https://zh.wikipedia.org/zh-tw/%E6%BC%AB%E5%A8%81%E7%94%B5%E5%BD%B1%E5%AE%87%E5%AE%99">#維基百科</a>
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