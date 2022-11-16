import { mount } from '@vue/test-utils'
import FormPhone from '@/components/FormItem/FormPhone.vue'

test('mount FormPhone component', async () => {
  expect(FormPhone).toBeTruthy()

  const wrapper = mount(FormPhone, {
    props: {
      modelValue: '',
      'onUpdate:modelValue': (e: string) => wrapper.setProps({ modelValue: e })
    }
  })

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.get('input').setValue('18812345678')

  expect(wrapper.props('modelValue')).toBe('18812345678')

  const emitEvent = wrapper.emitted('update:modelValue')

  expect(emitEvent).toHaveLength(1)
})
