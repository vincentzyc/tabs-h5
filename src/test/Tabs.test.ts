import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Tabs from '@/components/Tabs/Tabs.vue'

test('mount Tabs component', async () => {
  expect(Tabs).toBeTruthy()

  const wrapper = mount(Tabs, {
    global: {
      plugins: [createTestingPinia()],
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})
