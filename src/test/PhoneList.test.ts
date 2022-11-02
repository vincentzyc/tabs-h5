import { mount } from '@vue/test-utils'
import PhoneList from '@/components/PhoneList/PhoneList.vue'

test('mount PhoneList component', async () => {
  expect(PhoneList).toBeTruthy()

  const wrapper = mount(PhoneList, {
    props: {
      list: [
        { "productCode": "", "num": "17688805942", "showMsg": "免费领取", "showMoney": "12528", "item": [{ "numChar": "1", "highlight": "0" }, { "numChar": "7", "highlight": "0" }, { "numChar": "6", "highlight": "0" }, { "numChar": "8", "highlight": "1" }, { "numChar": "8", "highlight": "1" }, { "numChar": "8", "highlight": "1" }, { "numChar": "0", "highlight": "0" }, { "numChar": "5", "highlight": "0" }, { "numChar": "9", "highlight": "0" }, { "numChar": "4", "highlight": "0" }, { "numChar": "2", "highlight": "0" }] },
        { "productCode": "", "num": "17688804349", "showMsg": "免费领取", "showMoney": "12528", "item": [{ "numChar": "1", "highlight": "0" }, { "numChar": "7", "highlight": "0" }, { "numChar": "6", "highlight": "0" }, { "numChar": "8", "highlight": "1" }, { "numChar": "8", "highlight": "1" }, { "numChar": "8", "highlight": "1" }, { "numChar": "0", "highlight": "0" }, { "numChar": "4", "highlight": "0" }, { "numChar": "3", "highlight": "0" }, { "numChar": "4", "highlight": "0" }, { "numChar": "9", "highlight": "0" }] },
        { "productCode": "", "num": "13211131147", "showMsg": "免费领取", "showMoney": "11488", "item": [{ "numChar": "1", "highlight": "1" }, { "numChar": "3", "highlight": "1" }, { "numChar": "2", "highlight": "1" }, { "numChar": "1", "highlight": "1" }, { "numChar": "1", "highlight": "1" }, { "numChar": "1", "highlight": "1" }, { "numChar": "3", "highlight": "1" }, { "numChar": "1", "highlight": "1" }, { "numChar": "1", "highlight": "1" }, { "numChar": "4", "highlight": "0" }, { "numChar": "7", "highlight": "0" }] },
        { "productCode": "", "num": "13249993378", "showMsg": "免费领取", "showMoney": "10678", "item": [{ "numChar": "1", "highlight": "0" }, { "numChar": "3", "highlight": "0" }, { "numChar": "2", "highlight": "0" }, { "numChar": "4", "highlight": "0" }, { "numChar": "9", "highlight": "1" }, { "numChar": "9", "highlight": "1" }, { "numChar": "9", "highlight": "1" }, { "numChar": "3", "highlight": "1" }, { "numChar": "3", "highlight": "1" }, { "numChar": "7", "highlight": "0" }, { "numChar": "8", "highlight": "1" }] },
        { "productCode": "", "num": "17688222405", "showMsg": "免费领取", "showMoney": "10648", "item": [{ "numChar": "1", "highlight": "0" }, { "numChar": "7", "highlight": "0" }, { "numChar": "6", "highlight": "0" }, { "numChar": "8", "highlight": "1" }, { "numChar": "8", "highlight": "1" }, { "numChar": "2", "highlight": "1" }, { "numChar": "2", "highlight": "1" }, { "numChar": "2", "highlight": "1" }, { "numChar": "4", "highlight": "0" }, { "numChar": "0", "highlight": "0" }, { "numChar": "5", "highlight": "0" }] },
        { "productCode": "", "num": "13189666446", "showMsg": "免费领取", "showMoney": "9908", "item": [{ "numChar": "1", "highlight": "0" }, { "numChar": "3", "highlight": "0" }, { "numChar": "1", "highlight": "0" }, { "numChar": "8", "highlight": "0" }, { "numChar": "9", "highlight": "0" }, { "numChar": "6", "highlight": "1" }, { "numChar": "6", "highlight": "1" }, { "numChar": "6", "highlight": "1" }, { "numChar": "4", "highlight": "1" }, { "numChar": "4", "highlight": "1" }, { "numChar": "6", "highlight": "1" }] },
        { "productCode": "", "num": "18566055596", "showMsg": "免费领取", "showMoney": "9848", "item": [{ "numChar": "1", "highlight": "0" }, { "numChar": "8", "highlight": "0" }, { "numChar": "5", "highlight": "0" }, { "numChar": "6", "highlight": "1" }, { "numChar": "6", "highlight": "1" }, { "numChar": "0", "highlight": "0" }, { "numChar": "5", "highlight": "1" }, { "numChar": "5", "highlight": "1" }, { "numChar": "5", "highlight": "1" }, { "numChar": "9", "highlight": "0" }, { "numChar": "6", "highlight": "0" }] },
        { "productCode": "", "num": "13249994474", "showMsg": "免费领取", "showMoney": "9808", "item": [{ "numChar": "1", "highlight": "0" }, { "numChar": "3", "highlight": "0" }, { "numChar": "2", "highlight": "0" }, { "numChar": "4", "highlight": "0" }, { "numChar": "9", "highlight": "1" }, { "numChar": "9", "highlight": "1" }, { "numChar": "9", "highlight": "1" }, { "numChar": "4", "highlight": "1" }, { "numChar": "4", "highlight": "1" }, { "numChar": "7", "highlight": "1" }, { "numChar": "4", "highlight": "1" }] },
        { "productCode": "", "num": "13249993385", "showMsg": "免费领取", "showMoney": "9678", "item": [{ "numChar": "1", "highlight": "0" }, { "numChar": "3", "highlight": "0" }, { "numChar": "2", "highlight": "0" }, { "numChar": "4", "highlight": "0" }, { "numChar": "9", "highlight": "1" }, { "numChar": "9", "highlight": "1" }, { "numChar": "9", "highlight": "1" }, { "numChar": "3", "highlight": "1" }, { "numChar": "3", "highlight": "1" }, { "numChar": "8", "highlight": "0" }, { "numChar": "5", "highlight": "0" }] },
        { "productCode": "", "num": "13192666449", "showMsg": "免费领取", "showMoney": "9608", "item": [{ "numChar": "1", "highlight": "0" }, { "numChar": "3", "highlight": "0" }, { "numChar": "1", "highlight": "0" }, { "numChar": "9", "highlight": "0" }, { "numChar": "2", "highlight": "0" }, { "numChar": "6", "highlight": "1" }, { "numChar": "6", "highlight": "1" }, { "numChar": "6", "highlight": "1" }, { "numChar": "4", "highlight": "1" }, { "numChar": "4", "highlight": "1" }, { "numChar": "9", "highlight": "0" }] },
        { "productCode": "", "num": "13249993369", "showMsg": "免费领取", "showMoney": "9558", "item": [{ "numChar": "1", "highlight": "0" }, { "numChar": "3", "highlight": "0" }, { "numChar": "2", "highlight": "0" }, { "numChar": "4", "highlight": "0" }, { "numChar": "9", "highlight": "1" }, { "numChar": "9", "highlight": "1" }, { "numChar": "9", "highlight": "1" }, { "numChar": "3", "highlight": "1" }, { "numChar": "3", "highlight": "1" }, { "numChar": "6", "highlight": "0" }, { "numChar": "9", "highlight": "0" }] }
      ],
    },
  })
  expect(wrapper.html()).toMatchSnapshot()
  
  const listLength = wrapper.props().list.length

  expect(wrapper.findAll('.phone-item')).toHaveLength(listLength)

  await wrapper.get('.phone-item').trigger('click')
  
  const emitEvent = wrapper.emitted('handleSelectedNum')

  expect(emitEvent).toHaveLength(1)
})
