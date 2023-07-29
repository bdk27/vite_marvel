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
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
    @import url(../../scss/_button.scss);

    .link {
        font-weight: bold;
        padding: 1rem 2rem;
        &:hover {
            color: #FFAF60;
        }
    }
</style>