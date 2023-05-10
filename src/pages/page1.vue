<template>
  <div class="wrapper">
    <img src="@/assets/img/header.jpg" alt="靓号抢购" class="widthfull" />
    <Tabs />
    <img alt="领卡流程" class="widthfull" v-lazy="img2" />
  </div>
</template>

<script setup lang="ts">
import img2 from '@/assets/img/img2.jpg';
import { CommonApi } from '@/api';
import { getUrlParam } from '@/utils';
import { useMainStore } from '@/pinia';
// import * as Sentry from '@sentry/vue';

const mainStore = useMainStore();

const pid = getUrlParam('pid');

async function getBaseData() {
  if (!pid) return;
  mainStore.setPid(pid);
  const param = { pid: pid, url: window.location.href, ipLocation: '1' };
  let res = await CommonApi.pageIdLocation(param);

  // Sentry.addBreadcrumb({
  //   category: 'data',
  //   message: 'pageIdLocation back data',
  //   data: res,
  //   level: 'info',
  // });

  mainStore.setCjAllData(res);
}
getBaseData();
</script>
