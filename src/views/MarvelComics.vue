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
                <router-link to="/marvel/tv?videoType=tv&company=420%7C38679" custom v-slot="{ navigate }">
                    <button @click="navigate" role="link" class="link">影集</button>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
    @import url(../scss/button.scss);
    
    .link {
        font-weight: bold;
        padding: 1rem 2rem;
        &:hover {
            .link {
                color: #FFAF60;
            }
        }
    }
</style>