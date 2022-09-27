<template>
  <div class="wg-tabs clearfix">
    <ul class="flex tab-bar-wrap align-end">
      <li
        class="flex flex-center tab-bar"
        v-for="(item, key) in tabList"
        :class="{ active: mainStore.activeTab === key }"
        @click="changeTab(key)"
      >
        <span class="tab-bar-title">{{ item.title }}</span>
        <img v-lazy="item.logo" :alt="item.title" class="tab-bar-logo" />
      </li>
    </ul>
    <div v-show="mainStore.activeTab === 0" class="tab-content">
      <Tab1 />
    </div>
    <div v-if="tabList[1].loaded" v-show="mainStore.activeTab === 1" class="tab-content">
      <Tab2 />
    </div>
    <div v-if="tabList[2].loaded" v-show="mainStore.activeTab === 2" class="tab-content">
      <Tab3 />
    </div>
  </div>
</template>

<script setup lang="ts">
import { showDialog } from "vant";
import tablogo1 from "@/assets/img/tablogo1.png";
import tablogo2 from "@/assets/img/tablogo2.png";
import tablogo3 from "@/assets/img/tablogo3.png";
import { useMainStore } from "@/pinia";
import { reportMatomo } from "@/utils/report";

const mainStore = useMainStore();

watch(
  () => mainStore.cjAllData,
  n => {
    if (n) resetCjData(tabList[mainStore.activeTab]);
  }
);

let tabList = $ref([
  {
    title: "联通",
    logo: tablogo1,
    loaded: true,
    tabId: "7sj28x5luu",
  },
  {
    title: "电信",
    logo: tablogo2,
    loaded: false,
    tabId: "ug1e2tb61y",
  },
  {
    title: "移动",
    logo: tablogo3,
    loaded: false,
    tabId: "8nngtvbqu3",
  },
]);

function resetCjData(tabItem: typeof tabList[0]) {
  if (!Array.isArray(mainStore.cjAllData?.tabInfo) || mainStore.cjAllData?.tabInfo.length === 0) {
    showDialog({ message: "未返回相关产品信息" });
    reportMatomo("tabInfo返回为空");
    return;
  }
  const curTab = mainStore.cjAllData?.tabInfo.find(item => tabItem.tabId === item.tabId);
  if (curTab) {
    mainStore.setCjData(curTab);
  } else {
    showDialog({ message: "未找到相关产品信息" });
    reportMatomo("未匹配到产品信息");
  }
}

function changeTab(i: number) {
  const tabItem = tabList[i];
  tabItem.loaded = true;
  mainStore.setActiveTab(i);
  resetCjData(tabItem);
  reportMatomo("Tabs标签-切换标签" + (i + 1));
}
</script>
