import { mount } from '@vue/test-utils'
import AgreementPopup from '@/components/AgreementPopup/AgreementPopup.vue'

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

test('mount AgreementPopup component', async () => {
  expect(AgreementPopup).toBeTruthy()

  const wrapper = mount(AgreementPopup, {
    props: {
      text: "https://fanyi.baidu.com/",
      show: true,
    },
  })

  await nextTick();

  await sleep(2000);

  expect(wrapper.html()).toMatchSnapshot()

  await wrapper.get('.agreement-confirm').trigger('click')

  const emitEvent = wrapper.emitted('update:show')

  expect(emitEvent).toHaveLength(1)
})
