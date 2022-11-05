<template>
  <div class="change-button-wrap">
    <div class="flex flex-center">
      <van-button
        @click="getPrePage()"
        class="change-button pre-button"
        icon="arrow-left"
        round
        type="primary"
        :disabled="preDisable"
        >上一页</van-button
      >
      <van-button
        @click="getNextPage()"
        class="change-button next-button"
        icon="arrow"
        icon-position="right"
        loading-text="下一页"
        round
        type="primary"
        :loading="nextLoading"
        >下一页</van-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  pageIndex: number;
  nextLoading: boolean;
}>();

const emits = defineEmits(["prepage", "nextpage"]);

const preDisable = $computed(() => props.pageIndex === 1);

function getPrePage() {
  emits("prepage");
}
function getNextPage() {
  emits("nextpage");
}
</script>
