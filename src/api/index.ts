import { ApiModule } from "./types"
import { Common, ApiModuleCommon } from './common';
import Axios from "@/plugins/axios"
import { Dialog } from 'vant';
import { closeLoading } from "@/utils/loading";

const BaseUrl = env() === "production" ? "//card-api.liulianglf.cn" : "//card-api.liulianglf.cn";

const createInterface = (arr: ApiModule[]) => {
  const Interface: Record<string, any> = {};
  arr.forEach(v => {
    Interface[v.name] = (param: unknown, config: Record<string, any>) => {
      return new Promise((resolve, reject) => {
        axiosPost({
          url: BaseUrl + v.url,
          data: param,
          getAllData: v.getAllData,
          getError: v.getError,
          ...config
        }).then(res => resolve(res)).catch(error => reject(error))
      })
    }
  })
  return Interface
}

export const CommonApi = createInterface(Common) as ApiModuleCommon

export function env() {
  if (process.env.NODE_ENV === "development") return "development";
  if (window.location.href.includes('test-')) return 'test';
  if (window.location.href.includes('pre-')) return 'pre';
  return "production";
}

export function axiosPost(config: Record<string, any>) {
  return new Promise((resolve, reject) => {
    Axios.post(config.url, config.data, config).then(res => {
      if (res.status !== 200) {
        console.log(res);
        closeLoading();
        return Dialog.alert({ message: res.statusText || '网络繁忙' });
      }
      const result = res.data;
      if (config.getAllData) return resolve(result);
      switch (result.code) {
        case "0": //  成功
          return resolve(result.data || "success");
        case "0000": //  成功
          return resolve(result.data || "success");
        default: // 失败
          if (config.getError) return reject('fail')
          closeLoading();
          Dialog.alert({ message: result.message || result.msg || '服务器繁忙' });
      }
    }).catch(error => {
      console.log(error);
      if (config.getError) return reject(error)
      closeLoading();
      if (error.response?.status === 404) return Dialog.alert({ message: '页面不存在' });
      Dialog.alert({ message: '网络繁忙' });
    });
  })
}