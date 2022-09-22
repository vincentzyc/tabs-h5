<template>
  <SelectNumber />
  <img src="@/assets/img/tab1-2.jpg" alt="产品说明" class="widthfull" />
  <img src="@/assets/img/tab1-3.jpg" alt="产品说明" class="widthfull" />
  <img src="@/assets/img/tab1-4.png" alt="产品说明" class="widthfull" />
  <div class="text-center expenses-wrap">
    <span class="expenses-text" @click="showExpenses()">资费详情说明</span>
  </div>
  <van-popup class="center-popup" v-model:show="show" round>
    <div class="popup-wrap">{{ expensesText }}</div>
  </van-popup>
</template>

<script setup lang="ts">
import { expensesText } from "./static-data";

let show = $ref(false);
function showExpenses() {
  show = true;
}
</script>
