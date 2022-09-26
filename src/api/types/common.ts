// export interface CheckToken {
//   id: number;
//   data: any
// }

export type PageIdLocation = {
  belongCity: string,
  city: string,
  conversionCode: string,
  displayProductName: string,
  district: string,
  idCard: boolean,
  mediaCode: string,
  onoffLine: 0 | 1,
  pageId: string,
  productAttrInfo: [],
  productCode: string,
  province: string,
  statisticsCode: string,
  tabId: string,
  pid: string,
  tabInfo: PageIdLocation[],
}

export interface TypeNumItem {
  item: { highlight: string, numChar: string }[],
  num: string,
  productCode: string,
  showMoney: string,
  showMsg: string,
  isLock?: boolean
}

export type GetPrettyMixItem = {
  code: string,
  data?: {
    numItem: TypeNumItem[],
  },
  message: string,
  success: boolean
}

export type LockNumber = {
  code: string,
  msg: string
}

export type SubmitForm = {
  msg: string,
  orderCode: string,
  responseCode: string,
  routeCode: string,
  sellerId: string,
  subMediaCode: string,
  url: string,
}