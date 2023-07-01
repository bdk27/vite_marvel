<script setup>
  import MovHero from './components/MovHero.vue'
  import MovContent from './components/MovContent.vue'
</script>

<template>
  <MovHero></MovHero>
  <MovContent></MovContent>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@500&display=swap');


  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans TC', sans-serif;
    /* background: #000; */
  }

  html {
    font-size: 62.5%;
  }

  section {
    padding: 5.6vw;
  }
</style>
