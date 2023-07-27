<script setup>
</script>

<template>
    <div class="container">
        <button>
            <router-link to="/marvel/movie?videoType=movie&company=420">電影</router-link> 
        </button>
        <button>
            <router-link to="/marvel/tv?videoType=tv&company=420%7C38679">影集</router-link>
        </button>

        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
</style>