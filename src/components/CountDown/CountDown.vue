<template>
  <div class="countdown" v-if="!isFinished">
    <p class="flex flex-center">
      <van-count-down :time="endTime" @finish="finished" class="countdown-time flex-inline align-middle">
        <template #default="timeData">
          <span class="countdown-timeblock" v-if="timeData.days > 0">{{ timeData.days }}</span>
          <span class="countdown-colon" v-if="timeData.days > 0">天</span>
          <span class="countdown-timeblock" v-if="timeData.days > 0 || timeData.hours > 0">{{
            timeData.hours > 9 ? timeData.hours : "0" + timeData.hours
          }}</span>
          <span class="countdown-colon" v-if="timeData.days > 0 || timeData.hours > 0">时</span>
          <span class="countdown-timeblock" v-if="timeData.days > 0 || timeData.hours > 0 || timeData.minutes > 0">{{
            timeData.minutes > 9 ? timeData.minutes : "0" + timeData.minutes
          }}</span>
          <span class="countdown-colon" v-if="timeData.days > 0 || timeData.hours > 0 || timeData.minutes > 0"
            >分</span
          >
          <span class="countdown-timeblock">{{
            timeData.seconds > 9 ? timeData.seconds : "0" + timeData.seconds
          }}</span>
          <span class="countdown-colon">秒</span>
        </template>
      </van-count-down>
    </p>
  </div>
</template>

<script lang="ts" setup>
let isFinished = $ref(false),
  endTime = $ref(0);

function finished() {
  isFinished = true;
}
function getDayLoopEndTime() {
  const today = new Date().toLocaleDateString();
  const todayTimeStamp = new Date(today).getTime();
  return todayTimeStamp + 24 * 60 * 60 * 1000;
}
function initCountDown() {
  endTime = getDayLoopEndTime() - Date.now();
}

onMounted(() => {
  initCountDown();
});
</script>
