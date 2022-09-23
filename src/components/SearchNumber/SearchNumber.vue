<template>
  <div class="relative flex input-search-wrap">
    <svg class="search-icon" viewBox="0 0 1024 1024">
      <path
        d="M910.933333 881.066667l-186.026666-186.026667a339.626667 339.626667 0 0 0 85.333333-225.28c0-188.586667-152.746667-341.333333-341.333333-341.333333s-341.333333 152.746667-341.333334 341.333333 152.746667 341.333333 341.333334 341.333333c86.613333 0 165.546667-32.426667 225.706666-85.76l186.026667 186.026667 30.293333-30.293333zM170.24 469.76c0-164.693333 133.973333-298.666667 298.666667-298.666667s298.666667 133.973333 298.666666 298.666667-133.973333 298.666667-298.666666 298.666667-298.666667-134.4-298.666667-298.666667z"
        fill="#bfbfbf"
      />
    </svg>
    <input
      v-model="inputNum"
      placeholder="请输入您喜欢的数字"
      class="input-search flex-auto"
      maxlength="8"
      ref="searchInput"
      type="text"
    />
    <div class="search-button flex-none fs14" @click="search()">搜索</div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits<{
  (e: "search", num: string): void;
}>();

let inputNum = $ref("");

function search() {
  emits("search", inputNum);
}
</script>
