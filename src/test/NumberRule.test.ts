import { mount } from '@vue/test-utils'
import NumberRule from '@/components/NumberRule/NumberRule.vue'

test('mount NumberRule component', async () => {
  expect(NumberRule).toBeTruthy()

  const wrapper = mount(NumberRule, {
    props: {
      ruleItems: [{
        label: "全部",
        value: "ALL1",
      },
      {
        label: "AAA+",
        value: "AAA+",
      },
      {
        label: "ABCBA",
        value: "ABCBA",
      },
      {
        label: "AABA",
        value: "AABA",
      }],
    },
  })
  const ruleItemsLength = wrapper.props().ruleItems.length

  expect(wrapper.findAll('.rule-item')).toHaveLength(ruleItemsLength)

  await wrapper.get('.rule-item').trigger('click')
  
  const incrementEvent = wrapper.emitted('selected')

  expect(incrementEvent).toHaveLength(1)
})
