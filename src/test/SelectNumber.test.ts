import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import SelectNumber from '@/components/SelectNumber/SelectNumber.vue'

// function sleep(delay = 0): Promise<void> {
//   return new Promise((resolve) => {
//     setTimeout(resolve, delay);
//   });
// }

test('mount SelectNumber component', async () => {
  expect(SelectNumber).toBeTruthy()

  const wrapper = mount(SelectNumber, {
    global: {
      plugins: [createTestingPinia()],
    },
    props: {

    },
  })

  expect(wrapper.html()).toMatchSnapshot()

  // await wrapper.get('.agreement-confirm').trigger('click')

  // const emitEvent = wrapper.emitted('update:show')

  // expect(emitEvent).toHaveLength(1)
})
