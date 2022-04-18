<template>
  <div class="nav">
    <div class="navItem">12</div>
  </div>
</template>

<script lang="ts">
  import { reactive, ref } from 'vue'
  export default {
    // setup() {
    //   const activeIndex = ref('1')
    //   const menuList = reactive([
    //     {
    //       index: '0',
    //       path: '/',
    //       icon: 'el-icon-s-home',
    //       name: '首页',
    //     },
    //     {
    //       index: '1',
    //       path: '/article',
    //       icon: 'el-icon-s-home',
    //       name: '文章',
    //     },
    //     {
    //       index: '2',
    //       path: '/item',
    //       icon: 'el-icon-star-on',
    //       name: '项目',
    //     },
    //     {
    //       index: '3',
    //       path: '/life',
    //       icon: 'el-icon-cold-drink',
    //       name: '生活',
    //     },
    //     {
    //       index: '4',
    //       path: '/message',
    //       icon: 'el-icon-chat-line-round',
    //       name: '留言',
    //     },
    //   ])
    //   function handleSelect(index: string, indexPath: string) {
    //     // console.log(index,indexPath);
    //   }
    //   return {
    //     activeIndex,
    //     handleSelect,
    //     menuList,
    //   }
    // },
  }
</script>

<style lang="scss" scoped>
  .nav {
    width: 100%;
    height: 50px;
    background-color: red;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    .navItem{
        width: 80px;
        height: 100%;
        background: yellowgreen;
    }
  }
</style>
