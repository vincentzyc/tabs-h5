<template>
  <div class="wg-tabs clearfix">
    <ul class="flex tab-bar-wrap align-end">
      <li
        class="flex flex-center tab-bar"
        v-for="(item, key) in tabList"
        :class="{ active: activeTab === key }"
        @click="changeTab(key)"
      >
        <span class="tab-bar-title">{{ item.title }}</span>
        <img v-lazy="item.logo" :alt="item.title" class="tab-bar-logo" />
      </li>
    </ul>
    <div v-if="tabList[0].loaded" v-show="activeTab === 0" class="tab-content">
      <Tab1 />
    </div>
    <div v-if="tabList[1].loaded" v-show="activeTab === 1" class="tab-content">
      <Tab2 />
    </div>
    <div v-if="tabList[2].loaded" v-show="activeTab === 2" class="tab-content">
      <Tab3 />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import tablogo1 from "@/assets/img/tablogo1.png";
import tablogo2 from "@/assets/img/tablogo2.png";
import tablogo3 from "@/assets/img/tablogo3.png";

const Tab2 = defineAsyncComponent(() => import("@/components/Tab2/Tab2.vue"));

const Tab3 = defineAsyncComponent(() => import("@/components/Tab3/Tab3.vue"));

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

let activeTab = $ref(0);

function changeTab(i: number) {
  const tabItem = tabList[i];
  tabItem.loaded = true;
  activeTab = i;
}
</script>
