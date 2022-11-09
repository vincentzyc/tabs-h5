import { mount } from '@vue/test-utils'
import FormAddress from '@/components/FormItem/FormAddress.vue'

test('mount FormAddress component', async () => {
  expect(FormAddress).toBeTruthy()

  const wrapper = mount(FormAddress, {
    props: {
      modelValue: 'initialText',
      'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e })
    }
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.get('input').setValue('测试详细地址')

  expect(wrapper.props('modelValue')).toBe('测试详细地址')

  const emitEvent = wrapper.emitted('update:modelValue')

  expect(emitEvent).toHaveLength(1)
})