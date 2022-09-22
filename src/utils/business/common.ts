import { getUrlParam } from "../index";
import { getType } from "../validate/dataType";

export function initfingerprint2() {
  const script = document.createElement("script");
  script.src = 'https://cdn.lipush.com/other/js/fingerprint2@1.0.0.js';
  document.head.appendChild(script);
}
/**
 * 获取当前链接参数值字符串||参数拼接后新跳转链接
 * @param {String} newUrl 需要拼接的链接
 * @param {Array} excludeKeys 需要排除的参数
 * @return {String} ''||链接参数值字符串||参数拼接后新跳转链接
 */
export function getUrlParamStr(newUrl: string, excludeKeys: string[] = ['id', 'pid']): string {
  if (!Array.isArray(excludeKeys)) return ''
  let param = '';
  const obj = getUrlParam(), newUrlObj = getUrlParam(null, newUrl) || {}
  excludeKeys = excludeKeys.concat(Object.keys(newUrlObj))
  for (const key in obj) {
    if (excludeKeys.includes(key)) continue
    const value = obj[key];
    param += `&${key}=${value}`
  }
  if (!newUrl || getType(newUrl) !== 'String') return param
  if (!param) return newUrl
  return newUrl.includes('?') ? newUrl + param : newUrl + '?' + param.slice(1)
}