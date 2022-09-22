import { encrypt, decrypt } from "./crypto"

/**
* 加密手机号
* @param {String} mobile 待加密手机号
* @return {String} （'market' + mobile，例如：market18812345678）加密后手机号
*/
export function encryptMobile(mobile: string): string {
  if (!mobile || typeof mobile !== "string") return '';
  const encryptMbk = encrypt('market' + mobile)
  return encryptMbk
}
/**
* 获取url链接上手机号
* @return {String} 手机号
*/
export function getUrlMobile(encryptMbk: string): string {
  const mbk = decrypt(encryptMbk)
  const mobile = mbk.slice(6)
  return mobile
}