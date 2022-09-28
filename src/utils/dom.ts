/**
   * 滑动到指定位置的缓冲动画函数
   * @param {Object} dom 目标dom
   * @param {Number} destination 目标位置
   * @param {Number} rate 缓动率(越大速度越慢)
   * 示例用法
     let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
     let dom = scrollTop === document.documentElement.scrollTop ? document.documentElement : document.body;
     easeout(dom, 0);
   */
export function easeout(dom: HTMLElement, destination = 0, rate = 5): void {
  let position = dom.scrollTop;
  if (position === destination || typeof destination !== "number" || rate === 0) {
    return;
  }
  // 不存在原生`requestAnimationFrame`，用`setTimeout`模拟替代
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (fn) {
      return setTimeout(fn, 17);
    };
  }
  function step() {
    position = position + (destination - position) / rate;
    if (Math.abs(destination - position) < 1) {
      //动画结束
      dom.scrollTop = destination;
      return;
    }
    dom.scrollTop = position;
    requestAnimationFrame(step);
  }
  step();
}

/**
 * 滚动到指定元素
 * @param {Object} el 当前dom元素 
 * @param {Number} offset 元素距离顶部的偏移量
 */
export function scrollIntoView(el: HTMLElement, offset = 200): void {
  if (!el) return;
  if (typeof offset !== 'number') return;
  const clientRect = el.getBoundingClientRect();
  const isElementInViewport = clientRect.top >= 0 && clientRect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  if (!isElementInViewport) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const dom = scrollTop === document.documentElement.scrollTop ? document.documentElement : document.body;
    const destination = (scrollTop + clientRect.top - offset) > 0 ? (scrollTop + clientRect.top - offset) : 0
    easeout(dom, destination, 10)
  }
}