<template>
  <div class="change-button-wrap">
    <div class="flex flex-center">
      <van-button @click="getPrePage()" class="change-button" icon="arrow-left" round type="primary"
        >上一页</van-button
      >
      <van-button
        @click="getNextPage()"
        class="change-button"
        icon="arrow"
        icon-position="right"
        loading-text="下一页"
        round
        type="primary"
        >下一页</van-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
function getPrePage() {
  console.log("上一页");
}
function getNextPage() {
  console.log("下一页");
}
</script>
