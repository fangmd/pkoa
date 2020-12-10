import { IsMobilePhone } from 'class-validator'

export class SendSMS {
  @IsMobilePhone('zh-CN')
  phone?: string
  type?: number
}
