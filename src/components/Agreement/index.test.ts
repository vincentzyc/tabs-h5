import { mount } from '@vue/test-utils'
import Agreement from './index.vue'

test('Agreement mount component', async () => {
  expect(Agreement).toBeTruthy()

  const wrapper = mount(Agreement, {
    props: {
      title: '填写并提交视为阅读并同意',
      agrList: [
        {
          title: "《个人信息保护政策》",
          text: "https://h5.lipush.com/h5/index.html?id=5523261663728019648",
        },
        {
          title: "《入网许可协议》",
          text: "https://h5.lipush.com/h5/index.html?id=4554931263728179465",
        },
        {
          title: "《单独同意书》",
          text: "https://h5.lipush.com/h5/index.html?id=7883210563728253535",
        },
      ]
    },
  })
  
  expect(wrapper.find('.agreement-text').text()).toContain(wrapper.props().title)
  
  expect(wrapper.findAll('.agreement-title')).toHaveLength(wrapper.props().agrList.length)

  // expect(wrapper.text()).toContain('4 x 2 = 8')
  // expect(wrapper.html()).toMatchSnapshot()

  // await wrapper.get('button').trigger('click')

  // expect(wrapper.text()).toContain('4 x 3 = 12')

  // await wrapper.get('button').trigger('click')

  // expect(wrapper.text()).toContain('4 x 4 = 16')
})
