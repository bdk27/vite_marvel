<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <section>
        <button>
            <RouterLink to="/marvel">MarvelComics</RouterLink>
        </button>
        <button>
            <RouterLink to="/dc">DcComics</RouterLink>
        </button>
    </section>
</template>

<style lang="scss" scoped>

</style>