<template>
  <div class="wrapper">
    <img src="@/assets/img/header.jpg" alt="靓号抢购" class="widthfull" />
    <Tabs />
    <img src="@/assets/img/img2.jpg" alt="领卡流程" class="widthfull" />
  </div>
</template>

<script setup lang="ts">
import { CommonApi } from "@/api";
import { getUrlParam } from "@/utils";
import { useMainStore } from "@/pinia";
const mainStore = useMainStore();

const pid = getUrlParam("pid");

async function getBaseData() {
  if (!pid) return;
  mainStore.setPid(pid);
  const param = { pid: pid, url: window.location.href, ipLocation: "1" };
  let res = await CommonApi.pageIdLocation(param);
  mainStore.setCjAllData(res);
}
getBaseData();
</script>
