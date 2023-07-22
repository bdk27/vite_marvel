<script setup>
import { useRoute } from 'vue-router';
  import BaseCardComponent from '../components/BaseCardComponent.vue';

  const route = useRoute();
</script>

<template>
  <h1>marvel-tv</h1>
  <BaseCardComponent :queryParam="route.query"></BaseCardComponent>
</template>

<style lang="scss" scoped>

</style>