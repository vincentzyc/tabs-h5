<template>
  <div class="select-number-wrapper">
    <div class="search-number-wrapper">
      <BelongCity />
      <SearchNumber />
      <NumberRule />
    </div>
    <PhoneList />
    <TogglePage />
  </div>
</template>

<script setup lang="ts">
import "./css/index.styl";
import { useMainStore } from "@/pinia";
import { watch } from "vue";

const mainStore = useMainStore();

watch(
  () => mainStore.cjAllData,
  (n, o) => {
    console.log(n, o);
  }
);
</script>
