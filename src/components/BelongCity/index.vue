<script setup lang="ts">
let showPicker = $ref(false),
  showValue = $ref("");
function openPicker() {
  showPicker = true;
}
</script>

<template>
  <div class="flex align-middle select-city" @click="openPicker">
    <span class="city-tip relative flex-none">归属地(可选择)</span>
    <span class="city-text flex-auto">{{ showValue ? showValue : "请选择归属地" }}</span>
    <svg class="location-icon flex-none" height="20" p-id="1792" viewBox="0 0 1024 1024" width="20">
      <path
        d="M512.103132 320.120979a106.221743 106.221743 0 1 1-75.507022 31.354611A106.221743 106.221743 0 0 1 512.103132 320.120979m0-63.989002a170.850635 170.850635 0 1 0 120.939214 49.911422A169.570855 169.570855 0 0 0 512.103132 256.131977z"
        fill="#999999"
      />
      <path
        d="M805.172761 124.314633a407.609942 407.609942 0 0 0-586.139257 0 431.285873 431.285873 0 0 0 0 599.576948L512.103132 1024l293.069629-300.108419a431.285873 431.285873 0 0 0 0-599.576948z m-44.152411 557.344207l-248.917218 255.956007-248.917217-255.956007a365.377201 365.377201 0 0 1 0-508.712565 346.82039 346.82039 0 0 1 497.834435 0 365.377201 365.377201 0 0 1 0 508.712565z"
        fill="#999999"
      /></svg
  ></div>
  <CityPicker v-model:show="showPicker" level="2" />
</template>
