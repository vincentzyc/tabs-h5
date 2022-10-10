<template>
  <div class="wrapper flex flex-center" style="user-select: none">
    <DragVerify
      v-model:isPassing="isPassing2"
      handlerIcon="el-icon-d-arrow-right"
      successIcon="el-icon-circle-check"
    />
  </div>
</template>

<script setup lang="ts">
let isPassing2 = $ref(false);
</script>
