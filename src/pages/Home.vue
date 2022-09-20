<template>
  <div class="wrapper">
    <Tabs />
    <div class="card">
      <button type="button" @click="count++">count is {{ count }}</button>
      <van-button type="primary">主要按钮</van-button>
      <van-button type="success">成功按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="danger">危险按钮</van-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// defineProps<{ msg: string }>();

const count = ref(0);
</script>
