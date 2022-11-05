import { mount } from '@vue/test-utils'
import TogglePage from '@/components/TogglePage/TogglePage.vue'

test('mount TogglePage component', async () => {
  expect(TogglePage).toBeTruthy()

  const wrapper = mount(TogglePage, {
    props: {
      pageIndex:1,
      nextLoading:false
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
})
