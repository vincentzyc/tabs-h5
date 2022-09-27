// import { getUrlParamStr } from '@/utils/business/common';
import Check from '@/utils/business/form-check';
import { scrollIntoView } from '@/utils/dom';
import { initfingerprint2, reportMatomo } from '@/utils/report';
import { showToast } from 'vant';

export const checkName = (v: string) => {
  const checkRes = Check.checkName(v)
  if (checkRes === true) {
    initfingerprint2()
    reportMatomo('输入框-姓名-name', v)
    return true
  }
  showToast(checkRes)
}
export const checkPhone = (v: string) => {
  const checkRes = Check.checkPhone(v)
  if (checkRes === true) {
    initfingerprint2()
    reportMatomo('手机号-手机号-phone', v)
    return true
  }
  showToast(checkRes)
}
export const checkIDCard = (v: string) => {
  const checkRes = Check.checkIDCard(v)
  if (checkRes === true) {
    reportMatomo('输入框-身份证-idCard', v)
    return true
  }
  showToast(checkRes)
}
export const checkCity = (v: string[]) => {
  if (Array.isArray(v) && v.length === 3) {
    reportMatomo('城市选择-城市-city', v.join(","))
    return true
  }
}
export const checkAddress = (v: string) => {
  const checkRes = Check.checkAddress(v)
  if (checkRes === true) {
    reportMatomo('输入框-地址-address', v)
    return true
  }
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