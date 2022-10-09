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
    <div class="dv_text" :style="textStyle" ref="refMessage">
      <slot name="textBefore" v-if="$slots.textBefore"></slot>
      {{ message }}
      <slot name="textAfter" v-if="$slots.textAfter"></slot>
    </div>

    <div
      class="dv_handler dv_handler_bg"
      :class="{ goFirst: isOk }"
      @mousedown="dragStart"
      @touchstart="dragStart"
      ref="handler"
      :style="handlerStyle"
    >
      <i :class="handlerIcon"></i>
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
  handlerIcon?: string;
  successIcon?: string;
  handlerBg?: string;
  textSize?: string;
  textColor?: string;
}
const props = withDefaults(defineProps<Props>(), {
  isPassing: false,
  width: 250,
  height: 40,
  text: "swiping to the right side",
  successText: "success",
  background: "#eee",
  progressBarBg: "#76c61d",
  completedBg: "#76c61d",
  circle: false,
  radius: "4px",
  handlerIcon: "",
  successIcon: "",
  handlerBg: "#fff",
  textSize: "14px",
  textColor: "#333",
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

let isMoving = $ref(false);
let x = $ref(0);
let isOk = $ref(false);

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
  handler.children[0].className = props.successIcon;
  progressBar.style.background = props.completedBg;
  refMessage.style.webkitTextFillColor = "unset";
  refMessage.style.animation = "slidetounlock2 3s infinite";
  refMessage.style.color = "#fff";
  emit("passcallback");
}
// function reset() {
//   const oriData = $options.data();
//   for (const key in oriData) {
//     if (Object.prototype.hasOwnProperty.call(oriData, key)) {
//       this[key] = oriData[key]
//     }
//   }
//   handler.style.left = "0";
//   progressBar.style.width = "0";
//   handler.children[0].className = handlerIcon;
//   refMessage.style["-webkit-text-fill-color"] = "transparent";
//   refMessage.style.animation = "slidetounlock 3s infinite";
//   refMessage.style.color = background;
// }
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
}
.drag_verify .dv_handler i {
  color: #666;
  padding-left: 0;
  font-size: 16px;
}
.drag_verify .dv_handler .el-icon-circle-check {
  color: #6c6;
  margin-top: 9px;
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
  animation: slidetounlock 3s infinite;
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
