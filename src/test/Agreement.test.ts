import { mount } from '@vue/test-utils'
import Agreement from '@/components/Agreement/Agreement.vue'

test('mount Agreement component', async () => {
  expect(Agreement).toBeTruthy()

  const wrapper = mount(Agreement, {
    props: {
      title: "填写并提交视为阅读并同意",
      checked: false,
      agrList: [
        {
          title: "《个人信息保护政策》",
          text: "https://h5.lipush.com/h5/index.html?id=5523261663728019648",
        },
        {
          title: "《入网许可协议》",
          text: "https://h5.lipush.com/h5/index.html?id=5220700664176004699",
        },
        {
          title: "《单独同意书》",
          text: "https://h5.lipush.com/h5/index.html?id=7883210563728253535",
        },
      ],
    },
  })

  expect(wrapper.html()).toMatchSnapshot()
  const listLength = wrapper.props().agrList.length

  expect(wrapper.findAll('.agreement-title')).toHaveLength(listLength)
})
