export default {
  "page1": defineAsyncComponent(() => import(`@/pages/page1.vue` /* webpackChunkName: "[request]" */)),
  "page2": defineAsyncComponent(() => import(`@/pages/page2.vue` /* webpackChunkName: "[request]" */)),
  "page3": defineAsyncComponent(() => import(`@/pages/page3.vue` /* webpackChunkName: "[request]" */)),
  "404": defineAsyncComponent(() => import(`@/pages/404.vue` /* webpackChunkName: "[request]" */)),
};