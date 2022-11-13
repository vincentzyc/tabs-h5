
import { mount } from '@vue/test-utils'
import { Lazyload } from 'vant';
import { createTestingPinia } from '@pinia/testing'
import Tab1 from '@/components/Tab1/Tab1.vue'

test('mount Tab1 component', async () => {
  expect(Tab1).toBeTruthy()

  const wrapper = mount(Tab1, {
    global: {
      plugins: [createTestingPinia()],
      directives: {
        lazy: Lazyload
      }
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})
