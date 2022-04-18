<template>
  <Header />
  <div class="home">
    <BlogItem />
  </div>
</template>

<script lang="ts">
  import Header from '@/components/Header.vue'
  import BlogItem from './components/BlogItem.vue'
  export default {
    components: {
      Header,
      BlogItem,
    },
  }
  // import { Options, Vue } from 'vue-class-component'

  // components: {
  //   Header,
  // },
  // export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
  .home {
    font-size: 20px;
  }
</style>
