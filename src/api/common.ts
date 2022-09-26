import { ApiModule } from "./types"
import * as Types from "./types/common"

export interface ApiModuleCommon {
  submitForm<T = Types.SubmitForm>(param: unknown): Promise<T>,
  pageIdLocation<T = Types.PageIdLocation>(param: unknown): Promise<T>,
  getPrettyMixItem<T = Types.GetPrettyMixItem>(param: unknown): Promise<T>,
  lockNumber<T = Types.LockNumber>(param: unknown): Promise<T>,
}

export const Common: ApiModule[] = [{
  name: "submitForm",
  url: "/service/onlineSaleCard/handleOrder"
}, {
  name: "pageIdLocation",
  url: "/service/jimPenn/pageIdLocation"
}, {
  name: "getPrettyMixItem",
  url: "/service/onlineSaleCard/getPrettyMixItem",
  getError: true,
  getAllData: true
}, {
  name: "getPrettyNoItem",
  url: "/service/onlineSaleCard/getPrettyNoItem",
  getError: true,
  getAllData: true
}, {
  name: "lockNumber",
  url: "/service/onlineSaleCard/lockNumber"
}]

export default Common