
import { mount } from '@vue/test-utils'
import { Lazyload } from 'vant';
import { createTestingPinia } from '@pinia/testing'
import Tab2 from '@/components/Tab2/Tab2.vue'

test('mount Tab2 component', async () => {
  expect(Tab2).toBeTruthy()

  const wrapper = mount(Tab2, {
    global: {
      plugins: [createTestingPinia()],
      directives: {
        lazy: Lazyload
      }
    },
  })
  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.get('.expenses-text').trigger('click')

  await nextTick()

  expect(wrapper.find('.agreement-popup').exists()).toBe(true)
})
