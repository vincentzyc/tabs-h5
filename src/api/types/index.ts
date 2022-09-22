export interface ApiModule {
  name: string,
  url: string,
  data?: any,
  type?: string,
  getError?: boolean,
  getAllData?: boolean
}