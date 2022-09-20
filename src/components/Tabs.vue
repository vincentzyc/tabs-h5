<template>
  <div class="wg-tabs clearfix">
    <!-- <ul>
      <li v-for="(tab, key) in item.list" :key="key" @click="locationHref(tab.headLink)">
        <img
          @load="imgload"
          :alt="tab.title"
          :src="tab.headImg"
          width="100%"
          v-show="key === item.activeTab"
          v-if="tab.headImg"
        />
      </li>
    </ul> -->

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
    <!-- <template v-for="(tabItem, key) in item.list">
      <div :key="key" v-if="tabItem.loaded" v-show="key === item.activeTab">
        <template v-for="tab in tabItem.list">
          <WidgetItems :item="tab" :key="tab.key" :parentItem="item" />
        </template>
      </div>

    </template> -->
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
  },
  {
    title: "电信",
    logo: tablogo2,
  },
  {
    title: "移动",
    logo: tablogo3,
  },
]);

let activeTab = $ref(0);
function changeTab(i: number) {
  activeTab = i;
}
</script>
