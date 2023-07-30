<script setup>
</script>

<template>
    <div class="container d-flex align-items-center flex-column mt-5">
        <div class="row row-cols-lg-2 justify-content-center">
            <div class="col-6">
                <router-link to="/sony/movie?videoType=movie&company=14439%7C326" custom v-slot="{ navigate }">
                    <button @click="navigate" role="link" class="link">電影</button>
                </router-link> 
            </div>
            <div class="col-6">
                <router-link to="/sony/tv?videoType=tv&company=11073%2C77937" custom v-slot="{ navigate }">
                    <button @click="navigate" role="link" class="link">影集</button>
                </router-link>
            </div>
        </div>

        <div class="intro">
            <div class="intro-logo">
               <img src="../../assets/img/Sony_logo.jpg" alt="sony-logo"> 
            </div>
            <div class="intro-content">
                <p>索尼影視娛樂，是一家影視製作和發行的美國傳媒娛樂公司。它是美國電影協會成員，美國五大電影公司之一，也是僅次於華特迪士尼公司、康卡斯特集團、華納兄弟探索、派拉蒙全球後全球第五高的娛樂公司</p>
                <a href="https://zh.wikipedia.org/zh-tw/%E7%B4%A2%E5%B0%BC%E5%BD%B1%E8%A6%96%E5%A8%9B%E6%A8%82">#維基百科</a>
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