<template>
  <SelectNumber @selected="selectNum" showBelongCity showSearchNumber showNumberRule />
  <img src="@/assets/img/tab1-2.jpg" alt="产品说明" class="widthfull mg-t10" />
  <img src="@/assets/img/tab1-3.jpg" alt="产品说明" class="widthfull" />
  <img alt="产品说明" class="widthfull img4" v-lazy="img4" />
  <div class="text-center expenses-wrap">
    <span class="expenses-text" @click="showExpenses()">资费详情说明</span>
  </div>
  <van-popup v-model:show="showForm" class="common-popup" style="max-width: 576px" teleport="body">
    <div class="common-wrap" v-if="selectNumItem">
      <p class="info-text-number"
        >已选择<span class="info-number">靓号 {{ selectNumItem.num }}</span> {{ showCity }}</p
      >
      <p class="info-text">根据国家手机号卡实名制规定</p>
      <p class="info-text">请如实填写信息，以便我们及时为您送达</p>
      <BaseForm :handleNo="selectNumItem.num" @submit="submitOrder" />
      <Agreement title="填写并提交视为阅读并同意" :agrList="agrList" v-model:checked="checked" />
    </div>
  </van-popup>
  <van-popup class="agreement-popup" v-model:show="show" round>
    <div class="agreement-wrap">{{ expensesText }}</div>
    <div class="agreement-confirm" @click="close()">我知道了</div>
  </van-popup>
</template>

<script setup lang="ts">
import img4 from "@/assets/img/tab1-4.png";
import { TypeNumItem } from "@/api/types/common";
import { expensesText } from "./static-data";
import { reportMatomo } from "@/utils/report";

provide("tabIndex", 0);

let showForm = $ref(false),
  show = $ref(false),
  checked = $ref(false),
  agrList = $ref([
    {
      title: "《个人信息保护政策》",
      text: "https://h5.lipush.com/h5/index.html?id=5523261663728019648",
    },
    {
      title: "《入网许可协议》",
      text: "https://h5.lipush.com/h5/index.html?id=5220700664176004699",
    },
    {
      title: "《单独同意书》",
      text: "https://h5.lipush.com/h5/index.html?id=7883210563728253535",
    },
  ]);

let selectNumItem = $ref<TypeNumItem | null>(null),
  showCity = $ref("");

function showExpenses() {
  show = true;
  reportMatomo("打开资费详情");
}
function close() {
  show = false;
  reportMatomo("关闭资费详情");
}

function selectNum(numItem: TypeNumItem, selectedBelong: string[]) {
  selectNumItem = numItem;
  showCity = selectedBelong.join(" ");
  showForm = true;
}
function submitOrder() {
  checked = true;
}
</script>
