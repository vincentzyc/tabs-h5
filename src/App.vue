<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from "@/pages/Home.vue";
import { reportMatomo } from "./utils/report";
window.onload = () => {
  let PAGESTARTTIME = performance.timing.fetchStart;
  const curTime = new Date().getTime();
  reportMatomo("首屏加载时长", (curTime - PAGESTARTTIME) / 1000 + "s");
};
</script>

<template>
  <Home />
</template>
