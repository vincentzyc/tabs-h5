// import { getUrlParamStr } from '@/utils/business/common';
import Check from '@/utils/business/form-check';
import { scrollIntoView } from '@/utils/dom';
import { closeLoading } from '@/utils/loading';
import { initfingerprint2, reportMatomo } from '@/utils/report';
import { showToast } from 'vant';

export const successCallback = async (resData: Record<string, any>, contactNumber: string) => {
  console.log(resData)
  console.log(contactNumber)
  // const urlMobileCode: any = await import(`@/utils/business/url-mobile`);
  // const encryptPhone = urlMobileCode.encryptMobile(contactNumber)
  // let realLink = ''
  // const cjData = store.state.cjData
  // setTimeout(() => {
  closeLoading();
  //   // 链接跳转优先级： 后台指定跳转链接 > 已配置跳转链接 > 头条渠道跳转链接 > 默认跳转链接
  //   if (resData?.url) {
  //     realLink = resData.url.includes('?') ? resData.url + '&mbk=' + encryptPhone : resData.url + '?mbk=' + encryptPhone
  //   } else if (resData.url) {
  //     realLink = resData.url
  //   } else if (cjData?.mediaCode === 'M001') {
  //     realLink = 'https://h5.liulianglf.cn/h5/index.html?id=2020101811302904760&mbk=' + encryptPhone
  //   } else {
  //     realLink = 'https://h5.lipush.com/h5/index.html?id=2021050616510700413&mbk=' + encryptPhone
  //   }
  //   window.location.href = getUrlParamStr(realLink)
  // }, 500);
}

export const checkName = (v: string) => {
  const checkRes = Check.checkName(v)
  if (checkRes === true) {
    initfingerprint2()
    return true
  }
  showToast(checkRes)
}
export const checkPhone = (v: string) => {
  const checkRes = Check.checkPhone(v)
  if (checkRes === true) {
    initfingerprint2()
    return true
  }
  showToast(checkRes)
}
export const checkIDCard = (v: string) => {
  const checkRes = Check.checkIDCard(v)
  if (checkRes === true) return true
  showToast(checkRes)
}
export const checkCity = (v: string[]) => {
  if (Array.isArray(v) && v.length === 3) return true
}
export const checkAddress = (v: string) => {
  const checkRes = Check.checkAddress(v)
  if (checkRes === true) return true
  showToast(checkRes)
}
export const checkOut = (formData: Record<string, any>) => {
  //校验表单
  // if (!formData.handleNo) {
  //   reportMatomo(`前端校验不通过-请选择号码`)
  //   const dom = document.getElementById('handleNo')
  //   if (dom) scrollIntoView(dom)
  //   return '请选择号码';
  // }

  const checkedName = Check.checkName(formData.custName);
  if (checkedName !== true) {
    reportMatomo(`前端校验不通过-${checkedName}`)
    const dom = document.getElementById('custName')
    if (dom) scrollIntoView(dom)
    return checkedName;
  }
  const checkedPhone = Check.checkPhone(formData.contactNumber);
  if (checkedPhone !== true) {
    reportMatomo(`前端校验不通过-${checkedPhone}`)
    const dom = document.getElementById('contactNumber')
    if (dom) scrollIntoView(dom)
    return checkedPhone;
  }
  const checkedIDCard = Check.checkIDCard(formData.idCardNo);
  if (checkedIDCard !== true) {
    reportMatomo(`前端校验不通过-${checkedIDCard}`)
    const dom = document.getElementById('idCardNo')
    if (dom) scrollIntoView(dom)
    return checkedIDCard;
  }

  //判断收货省份是否为空
  if (!formData.addressArr[0]) {
    const dom = document.getElementById('addressArr')
    if (dom) scrollIntoView(dom)
    return "请选择收货省份";
  }

  //判断收货市区是否为空
  if (!formData.addressArr[1]) {
    const dom = document.getElementById('addressArr')
    if (dom) scrollIntoView(dom)
    return "请选择收货城市";
  }

  //判断收货区县是否为空
  if (!formData.addressArr[2]) {
    const dom = document.getElementById('addressArr')
    if (dom) scrollIntoView(dom)
    return "请选择收货地区";
  }

  const checkedAddress = Check.checkAddress(formData.address);
  if (checkedAddress !== true) {
    reportMatomo(`前端校验不通过-${checkedAddress}`)
    const dom = document.getElementById('address')
    if (dom) scrollIntoView(dom)
    return checkedAddress;
  }

  return true
}