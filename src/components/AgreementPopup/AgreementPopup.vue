<template>
  <van-popup v-model:show="show" class="agreement-popup" style="max-width: 576px" teleport="body">
    <div class="agreement-wrap">
      <iframe :src="text" frameborder="0" style="width: 100%; height: 100%"></iframe>
    </div>
    <div class="agreement-confirm" @click="close()">我知道了</div>
  </van-popup>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean;
  text: string;
}>();
const emit = defineEmits<{
  (e: "update:show", bool: boolean): void;
}>();
function close() {
  emit("update:show", false);
}
</script>
