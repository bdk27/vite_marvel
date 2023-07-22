<script setup>
</script>

<template>
    <div class="container">
        <button>
            <router-link to="/dc/movie?videoType=movie&company=429">電影</router-link> 
        </button>
        <button>
            <router-link to="/dc/tv?videoType=tv&company=429">影集</router-link>
        </button>

        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
</style>