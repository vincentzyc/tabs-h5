import { mount } from '@vue/test-utils'
import SearchNumber from '@/components/SearchNumber/SearchNumber.vue'

test('mount SearchNumber component', async () => {
  expect(SearchNumber).toBeTruthy()

  const wrapper = mount(SearchNumber)

  await wrapper.get('.search-button').trigger('click')

  const emitEvent = wrapper.emitted('search')

  expect(emitEvent).toHaveLength(1)
})
