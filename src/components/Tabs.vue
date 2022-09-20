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
    <template v-for="(item, key) in tabList">
      <div v-if="item.loaded" v-show="key === activeTab" class="tab-content">
        <div>{{ item.title }}</div>
        <div class="text-center expenses-wrap">
          <span class="expenses-text">资费详情说明</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import tablogo1 from "@/assets/img/tablogo1.png";
import tablogo2 from "@/assets/img/tablogo2.png";
import tablogo3 from "@/assets/img/tablogo3.png";
// defineProps<{ msg: string }>();

let tabList = $ref([
  {
    title: "联通",
    logo: tablogo1,
    loaded: true,
  },
  {
    title: "电信",
    logo: tablogo2,
    loaded: false,
  },
  {
    title: "移动",
    logo: tablogo3,
    loaded: false,
  },
]);

let activeTab = $ref(0);
function changeTab(i: number) {
  const tabItem = tabList[i];
  tabItem.loaded = true;
  activeTab = i;
}
</script>
