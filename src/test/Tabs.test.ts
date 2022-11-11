import { mount } from '@vue/test-utils'
import { Lazyload } from 'vant';
import { createTestingPinia } from '@pinia/testing'
import Tabs from '@/components/Tabs/Tabs.vue'

test('mount Tabs component', async () => {
  expect(Tabs).toBeTruthy()

  const wrapper = mount(Tabs, {
    global: {
      plugins: [createTestingPinia()],
      directives: {
        lazy: Lazyload
      }
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})
