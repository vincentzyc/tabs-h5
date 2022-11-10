import { mount } from '@vue/test-utils'
import FormIDCard from '@/components/FormItem/FormIDCard.vue'

test('mount FormIDCard component', async () => {
  expect(FormIDCard).toBeTruthy()

  const wrapper = mount(FormIDCard, {
    props: {
      modelValue: '',
      'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e })
    }
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.get('input').setValue('测试身份证号')

  expect(wrapper.props('modelValue')).toBe('测试身份证号')

  const emitEvent = wrapper.emitted('update:modelValue')

  expect(emitEvent).toHaveLength(1)
})