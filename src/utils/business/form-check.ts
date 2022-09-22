function isIDCardNum(num: string) {
  if (num.length != 18) return '输入的身份证号长度不对，或者号码不符合规定！';

  num = num.toUpperCase();
  //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
  if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num))) {
    return '输入的身份证号长度不对，或者号码不符合规定！';
  }
  //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
  //下面分别分析出生日期和校验位
  const re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
  const arrSplit = num.match(re)
  let bGoodDay
  if (arrSplit) {
    //检查生日日期是否正确
    const dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
    bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
  }

  if (!bGoodDay) {
    return '输入的身份证号里出生日期不对！';
  } else {
    //检验18位身份证的校验码是否正确。
    //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
    const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
    const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    let nTemp = 0,
      i;
    for (i = 0; i < 17; i++) {
      nTemp += parseFloat(num.substr(i, 1)) * arrInt[i];
    }
    const valnum = arrCh[nTemp % 11];
    if (valnum != num.substr(17, 1)) {
      //$("#tip").html('18位身份证的校验码不正确！应该为：' + valnum);
      return '18位身份证的校验码不正确！';
    }
    return true;
  }
}
function validateIDCard(v: string) {
  //判断身份证号格式
  if (isIDCardNum(v) !== true) return '请输入正确的身份证号码';
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();
  const birYear = parseInt(v.substr(6, 4));
  const birMonth = parseInt(v.substr(10, 2));
  const birDay = parseInt(v.substr(12, 2));
  const age = year - birYear;

  if (age < 16) return '年龄需大于等于16周岁才可办理';
  if (age === 16) {
    if (month < birMonth) return '年龄需大于等于16周岁才可办理';
    if (month === birMonth && day < birDay) return '年龄需大于等于16周岁才可办理';
  }
  if (age > 51) return '年龄需小于等于51周岁才可办理';
  if (age === 51) {
    if (month > birMonth) return '年龄需小于等于51周岁才可办理';
    if (month === birMonth && day > birDay) return '年龄需小于等于51周岁才可办理';
  }

  return true
}

const Check = {
  checkName(value: string) {
    if (!value) return '请输入姓名';
    if (/^[\u4e00-\u9fa5]{2,20}$/.test(value)) return true;
    if (value.length < 2 || value.length > 20) return '姓名长度不能小于2或超过20';
    return '姓名必须为汉字'
  },
  checkPhone(value: string) {
    if (!value) return '请输入手机号';
    if (/^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(value)) return true;
    return '请输入正确的手机号码'
  },
  verifyCode(value: string) {
    if (!value) return '请输入验证码';
    if (value.length === 4) return true;
    return "验证码错误";
  },
  checkIDCard(value: string) {
    if (!value) return '请输入身份证号';
    return validateIDCard(value)
  },
  checkAddress(value: string) {
    if (!value) return '请输入详细地址';
    //地址信息不得含特殊字符
    const roadReg = /^[\u4E00-\u9FA5A-Za-z0-9_—()（）-]+$/gi;
    if (!roadReg.test(value)) return '地址信息不得含特殊字符哟';
    const roadReg2 = /^[A-Za-z0-9]+$/gi;
    if (roadReg2.test(value)) return '地址信息不得纯为英文字母或数字哟';
    if (value.length < 4) return '地址不能太短哟';
    return true;
  },
  city(value: string) {
    if (!value) return '请选择收货地址';
    return true;
  }
}
export default Check