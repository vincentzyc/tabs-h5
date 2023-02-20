

import { mount } from '@vue/test-utils'
import { Lazyload } from 'vant';
import { createTestingPinia } from '@pinia/testing'
import Tab3 from '@/components/Tab3/Tab3.vue'

test('mount Tab3 component', async () => {
  expect(Tab3).toBeTruthy()

  const wrapper = mount(Tab3, {
    global: {
      plugins: [createTestingPinia()],
      directives: {
        lazy: Lazyload as any
      }
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
  
  await wrapper.get('.expenses-text').trigger('click')

  await nextTick()

  expect(wrapper.find('.agreement-popup').exists()).toBe(true)
})
