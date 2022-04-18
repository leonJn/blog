<template>
  <div class="head">
    <Nav />
  </div>
</template>

<script lang="ts">
  import Nav from '@/components/Nav.vue'
  export default {
    components: {
      Nav,
    },
  }
</script>

<style lang="scss" scoped>
  .head {
    width: 100vw;
    height: 250px;
    background-color: rosybrown;
    position: relative;
  }
</style>
