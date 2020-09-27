import HttpC from "../constants/http-c";

// 网络请求结果封装类
// Restful 接口结果封装
export default class HttpResult {
  code: number;
  msg: string;
  data: any;

  constructor(code: number, msg: string, data?: any) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }

  // Create Success HttpResult
  static success(data?: any): HttpResult {
    return new HttpResult(HttpC.SUCCESS, "success", data);
  }

  // Create Fail HttpResult
  static fail(code: number, msg: string): HttpResult {
    return new HttpResult(code, msg);
  }

  public toString(): string {
    return `${this.code}`;
  }
}
