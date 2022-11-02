import { mount } from '@vue/test-utils'
import CountDown from '@/components/CountDown/CountDown.vue'

test('mount CountDown component', async () => {
  expect(CountDown).toBeTruthy()

  const wrapper = mount(CountDown)

  expect(wrapper.html()).toMatchSnapshot()
})
