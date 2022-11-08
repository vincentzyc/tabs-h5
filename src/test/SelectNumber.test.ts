import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import SelectNumber from '@/components/SelectNumber/SelectNumber.vue'

test('mount SelectNumber component', async () => {
  expect(SelectNumber).toBeTruthy()

  const wrapper = mount(SelectNumber, {
    global: {
      plugins: [createTestingPinia()],
      provide: {
        tabIndex: 0
      }
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
})
