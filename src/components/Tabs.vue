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

    <ul class="flex tab-bar-wrap">
      <li class="flex-auto tab-bar-title">
        <span>联通</span>
        <img src="@/assets/img/tablogo1.png" alt="联通" style="width:100%"/>
      </li>
      <li class="flex-auto tab-bar-title">
        <span>电信</span>
        <img src="@/assets/img/tablogo2.png" alt="电信" style="width:100%"/>
      </li>
      <li class="flex-auto tab-bar-title">
        <span>移动</span>
        <img src="@/assets/img/tablogo3.png" alt="移动" style="width:100%"/>
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
// import { ref } from "vue";
// defineProps<{ msg: string }>();

// const tabTitles = ref();
</script>
