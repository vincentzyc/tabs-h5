const CryptoJS = require("crypto-js");

const Aes = CryptoJS.AES
const Utf8 = CryptoJS.enc.Utf8
const Hex = CryptoJS.enc.Hex
const Base64 = CryptoJS.enc.Base64
const CBC = CryptoJS.mode.CBC
const Pkcs7 = CryptoJS.pad.Pkcs7

const KEY = Utf8.parse("junbo888junbo999")
const IV = Utf8.parse("8765432112345678")

/**
 * 加密存本地
 * @param {String} data 加密字符串
 * @return 加密后字符串(hex)
 */
export function encrypt(data: string) {
  if (typeof data !== "string") {
    data = JSON.stringify(data);
  }
  const bytes = Aes.encrypt(data, KEY, {
    iv: IV,
    mode: CBC,
    padding: Pkcs7
  })
  // const base64res = bytes.toString()  //base64
  const res = bytes.ciphertext.toString()   //hex
  return res;
}
/**
 * 解密存本地
 * @param {String} data 解密字符串(base64)
 * @return 解密后字符串
 */
export function decrypt(data: string) {
  if (!data || typeof data !== "string") return '';
  const hexStr = Hex.parse(data);
  const base64Str = Base64.stringify(hexStr);
  const bytes = CryptoJS.AES.decrypt(base64Str, KEY, {
    iv: IV,
    mode: CBC,
    padding: Pkcs7
  });
  const res = bytes.toString(Utf8);
  return res
}
