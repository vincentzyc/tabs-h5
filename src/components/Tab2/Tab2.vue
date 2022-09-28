<template>
  <div class="form-wrapper">
    <BaseForm @submit="submitOrder" />
  </div>
  <MarqueeSingle class="mg-b10" />
  <Agreement title="填写并提交视为阅读并同意" :agrList="agrList" v-model:checked="checked" />
  <img src="@/assets/img/tab2-2.jpg" alt="产品说明" class="widthfull" />
  <img src="@/assets/img/tab2-3.jpg" alt="产品说明" class="widthfull" />
  <div class="text-center expenses-wrap">
    <span class="expenses-text" @click="showExpenses()">资费详情说明</span>
  </div>
  <van-popup class="agreement-popup" v-model:show="show" round>
    <div class="agreement-wrap">{{ expensesText }}</div>
    <div class="agreement-confirm" @click="close()">我知道了</div>
  </van-popup>
</template>

<script setup lang="ts">
import { expensesText } from "./static-data";

provide("tabIndex", 1);

let show = $ref(false),
  checked = $ref(true),
  agrList = $ref([
    {
      title: "《个人信息保护政策》",
      text: "https://h5.lipush.com/h5/index.html?id=5523261663728019648",
    },
    {
      title: "《入网许可协议》",
      text: "https://h5.lipush.com/h5/index.html?id=4554931263728179465",
    },
    {
      title: "《单独同意书》",
      text: "https://h5.lipush.com/h5/index.html?id=7883210563728253535",
    },
  ]);
function showExpenses() {
  show = true;
}
function close() {
  show = false;
}
function submitOrder() {
  checked = true;
}
</script>
