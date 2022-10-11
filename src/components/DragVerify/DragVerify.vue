<template>
  <div
    ref="dragVerify"
    class="drag_verify"
    :style="dragVerifyStyle"
    @mousemove="dragMoving"
    @mouseup="dragFinish"
    @mouseleave="dragFinish"
    @touchmove="dragMoving"
    @touchend="dragFinish"
  >
    <div class="dv_progress_bar" :class="{ goFirst2: isOk }" ref="progressBar" :style="progressBarStyle"> </div>
    <div class="dv_text" :style="textStyle" ref="refMessage">{{ message }}</div>
    <div
      class="dv_handler dv_handler_bg"
      :class="{ goFirst: isOk }"
      @mousedown="dragStart"
      @touchstart="dragStart"
      ref="handler"
      :style="handlerStyle"
    >
      <div style="width: 24px; height: 24px">
        <svg v-if="props.isPassing" viewBox="0 0 1024 1024">
          <path
            fill="#76c61d"
            d="M512 960C264 960 64 759 64 512S264 64 512 64s448 200 448 448S759 960 512 960zM512 128C300 128 128 300 128 512c0 211 172 383 383 383 211 0 383-172 383-383C895 300 723 128 512 128z"
          ></path>
          <path
            fill="#76c61d"
            d="M726 393c-12-12-32-12-45 0l-233 235-103-106c-12-12-32-12-45-0-12 12-12 32-0 45l126 129c0 0 0 0 0 0 0 0 0 0 0 0 2 1 4 3 6 4 1 0 2 1 3 2 3 1 8 2 12 2 4 0 8-0 11-2 1-0 2-1 3-2 2-1 4-2 6-4 0-0 0-0 0-0 0-0 0-0 0-0l256-259C739 425 739 405 726 393z"
          ></path>
        </svg>
        <svg v-else viewBox="0 0 1027 1024">
          <path
            fill="#8a8a8a"
            d="M189 794c-10 0-20-3-28-11-15-15-15-40 0-56L408 479 160 231c-15-15-15-40 0-56 15-15 40-15 56 0l275 275c7 7 11 17 11 28 0 10-4 20-11 28L217 782C209 790 199 794 189 794zM557 794c-10 0-20-3-28-11-15-15-15-40 0-56l246-246L528 231c-15-15-15-40 0-56 15-15 40-15 56 0l275 275c15 15 15 40 0 56L585 782C578 790 567 794 557 794z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  isPassing: boolean;
  width?: number;
  height?: number;
  text?: string;
  successText?: string;
  background?: string;
  progressBarBg?: string;
  completedBg?: string;
  circle?: boolean;
  radius?: string;
  handlerBg?: string;
  textSize?: string;
  textColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  isPassing: false,
  width: 250,
  height: 40,
  text: "请按住滑块拖动",
  successText: "验证通过",
  background: "#ddd",
  progressBarBg: "#76c61d",
  completedBg: "#76c61d",
  circle: false,
  radius: "4px",
  handlerBg: "#fff",
  textSize: "14px",
  textColor: "#666",
});

const emit = defineEmits<{
  (e: "handlerMove"): void;
  (e: "passfail"): void;
  (e: "update:isPassing", bool: boolean): void;
  (e: "passcallback"): void;
}>();

const dragVerify = $ref<HTMLDivElement>();
const progressBar = $ref<HTMLDivElement>();
const handler = $ref<HTMLDivElement>();
const refMessage = $ref<HTMLDivElement>();

let isMoving = $ref(false);
let x = $ref(0);
let isOk = $ref(false);

onMounted(() => {
  const dragEl = dragVerify;
  dragEl.style.setProperty("--textColor", props.textColor);
  dragEl.style.setProperty("--width", Math.floor(props.width / 2) + "px");
  dragEl.style.setProperty("--pwidth", -Math.floor(props.width / 2) + "px");
});

const handlerStyle = $computed(() => ({
  width: props.height + "px",
  height: props.height + "px",
  background: props.handlerBg,
}));

const message = $computed(() => (props.isPassing ? props.successText : props.text));

const dragVerifyStyle = $computed(() => ({
  width: props.width + "px",
  height: props.height + "px",
  lineHeight: props.height + "px",
  background: props.background,
  borderRadius: props.circle ? props.height / 2 + "px" : props.radius,
}));

const progressBarStyle = $computed(() => ({
  background: props.progressBarBg,
  height: props.height + "px",
  borderRadius: props.circle ? props.height / 2 + "px 0 0 " + props.height / 2 + "px" : props.radius,
}));

const textStyle = $computed(() => ({
  height: props.height + "px",
  width: props.width + "px",
  fontSize: props.textSize,
}));

function dragStart(e: MouseEvent | TouchEvent) {
  e.preventDefault();
  if (!props.isPassing) {
    isMoving = true;
    x = "pageX" in e ? e.pageX : e.touches[0].pageX;
  }
  emit("handlerMove");
}
function dragMoving(e: MouseEvent | TouchEvent) {
  if (isMoving && !props.isPassing) {
    var _x = "pageX" in e ? e.pageX : e.touches[0].pageX - x;
    if (_x > 0 && _x <= props.width - props.height) {
      handler.style.left = _x + "px";
      progressBar.style.width = _x + props.height / 2 + "px";
    } else if (_x > props.width - props.height) {
      handler.style.left = props.width - props.height + "px";
      progressBar.style.width = props.width - props.height / 2 + "px";
      passVerify();
    }
  }
}
function dragFinish(e: MouseEvent | TouchEvent) {
  if (isMoving && !props.isPassing) {
    var _x = "pageX" in e ? e.pageX : e.changedTouches[0].pageX - x;
    if (_x < props.width - props.height) {
      isOk = true;
      setTimeout(() => {
        handler.style.left = "0";
        progressBar.style.width = "0";
        isOk = false;
      }, 500);
      emit("passfail");
    } else {
      handler.style.left = props.width - props.height + "px";
      progressBar.style.width = props.width - props.height / 2 + "px";
      passVerify();
    }
    isMoving = false;
  }
}
function passVerify() {
  emit("update:isPassing", true);
  isMoving = false;
  progressBar.style.background = props.completedBg;
  refMessage.style.webkitTextFillColor = "unset";
  refMessage.style.animation = "slidetounlock2 2s infinite";
  refMessage.style.color = "#fff";
  emit("passcallback");
}
function reset() {
  isMoving = false;
  x = 0;
  isOk = false;
  handler.style.left = "0";
  progressBar.style.width = "0";
  refMessage.style.webkitTextFillColor = "transparent";
  refMessage.style.animation = "slidetounlock 3s infinite";
  refMessage.style.color = props.background;
}
defineExpose({ reset });
</script>
<style scoped>
.drag_verify {
  position: relative;
  background-color: #e8e8e8;
  text-align: center;
  overflow: hidden;
}
.drag_verify .dv_handler {
  position: absolute;
  top: 0px;
  left: 0px;
  cursor: move;
  display: flex;
  align-items: center;
  justify-content: center;
}

.drag_verify .dv_progress_bar {
  position: absolute;
  height: 34px;
  width: 0px;
}
.drag_verify .dv_text {
  position: absolute;
  top: 0px;
  color: transparent;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, var(--textColor)),
    color-stop(0.4, var(--textColor)),
    color-stop(0.5, #fff),
    color-stop(0.6, var(--textColor)),
    color-stop(1, var(--textColor))
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-size-adjust: none;
  animation: slidetounlock 2s infinite;
}
.drag_verify .dv_text * {
  -webkit-text-fill-color: var(--textColor);
}
.goFirst {
  left: 0px !important;
  transition: left 0.5s;
}
.goFirst2 {
  width: 0px !important;
  transition: width 0.5s;
}
@keyframes slidetounlock {
  0% {
    background-position: var(--pwidth) 0;
  }
  100% {
    background-position: var(--width) 0;
  }
}
@keyframes slidetounlock2 {
  0% {
    background-position: var(--pwidth) 0;
  }
  100% {
    background-position: var(--pwidth) 0;
  }
}
</style>
