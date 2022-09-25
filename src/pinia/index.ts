import { PageIdLocation } from '@/api/types/common';
import { defineStore } from 'pinia'

// main is the name of the store. It is unique across your application
// and will appear in devtools
export const useMainStore = defineStore('main', {
  // a function that returns a fresh state
  state: () => ({
    counter: 0,
    pid: '',
    configTab: 'page',
    selectWg: null as Record<string, any> | null,
    cjAllData: null as PageIdLocation | null,
    cjData: null as PageIdLocation | null,
  }),
  // optional getters
  getters: {
    // getters receive the state as first parameter
    doubleCount: (state) => state.counter * 2,
    // use getters in other getters
    doubleCountPlusOne(): number {
      return this.doubleCount * 2 + 1
    },
    locationCity: state => [state.cjData?.province || '', state.cjData?.city || '']
  },
  // optional actions
  actions: {
    setPid(payload: string) {
      this.pid = payload;
    },
    setSelectWg(payload: Record<string, any> | null) {
      this.selectWg = payload;
    },
    setCjAllData(payload: PageIdLocation | null) {
      this.cjAllData = payload;
    },
    setCjData(payload: PageIdLocation | null) {
      this.cjData = payload;
    },
    reset() {
      // `this` is the store instance
      this.counter = 0
    },
  },
})