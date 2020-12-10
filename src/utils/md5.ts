import { Md5 } from 'ts-md5/dist/md5'

export default class MD5Utils {
  public static hashStr(content: string): string {
    return Md5.hashStr(content) as string
  }
}
