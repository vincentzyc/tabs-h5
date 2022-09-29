<template>
  <component :is="curPage"></component>
</template>

<script lang="ts">
import RouterComponent from "@/router";
import { getUrlParam } from "./utils";
import { reportMatomo } from "./utils/report";

export default defineComponent({
  name: "App",
  components: RouterComponent,
  setup() {
    window.onload = () => {
      let PAGESTARTTIME = performance.timing.fetchStart;
      const curTime = new Date().getTime();
      reportMatomo("首屏加载时长", (curTime - PAGESTARTTIME) / 1000 + "s");
    };

    function getPage() {
      let page = getUrlParam("id");
      if (page === undefined || page === null) {
        page = "202209271020";
      } else if (typeof page === "string") {
        if (!Object.prototype.hasOwnProperty.call(RouterComponent, page)) page = "404";
      } else {
        page = "404";
      }
      return page;
    }
    let curPage = getPage();

    return {
      curPage,
    };
  },
});
</script>
