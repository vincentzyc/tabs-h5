import { mount } from '@vue/test-utils'
import FormCity from '@/components/FormItem/FormCity.vue'

test('mount FormCity component', async () => {
  expect(FormCity).toBeTruthy()

  const wrapper = mount(FormCity, {
    props: {
      modelValue: '',
      'onUpdate:modelValue': (e: string[]) => wrapper.setProps({ modelValue: e })
    }
  })

  expect(wrapper.html()).toMatchSnapshot()

  // await wrapper.get('input').setValue('测试姓名')

  // expect(wrapper.props('modelValue')).toBe('测试姓名')

  // const emitEvent = wrapper.emitted('update:modelValue')

  // expect(emitEvent).toHaveLength(1)
})