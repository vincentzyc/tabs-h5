import { mount } from '@vue/test-utils'
import FormName from '@/components/FormItem/FormName.vue'

test('mount FormName component', async () => {
  expect(FormName).toBeTruthy()

  const wrapper = mount(FormName, {
    props: {
      modelValue: '',
      'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e })
    }
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.get('input').setValue('测试姓名')

  expect(wrapper.props('modelValue')).toBe('测试姓名')

  const emitEvent = wrapper.emitted('update:modelValue')

  expect(emitEvent).toHaveLength(1)
})