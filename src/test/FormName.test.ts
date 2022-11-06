import { mount } from '@vue/test-utils'
import FormName from '@/components/FormItem/FormName.vue'

test('mount FormName component', async () => {
  expect(FormName).toBeTruthy()

  const wrapper = mount(FormName)

  expect(wrapper.html()).toMatchSnapshot()
})
