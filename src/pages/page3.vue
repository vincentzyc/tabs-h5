<template>
  <div class="wrapper flex flex-center" style="user-select: none">
    <DragVerify
      v-model:isPassing="isPassing2"
      text="请按住滑块拖动"
      successText="验证通过"
      handlerIcon="el-icon-d-arrow-right"
      successIcon="el-icon-circle-check"
    />
  </div>
</template>

<script setup lang="ts">
let isPassing2 = $ref(false);
</script>
