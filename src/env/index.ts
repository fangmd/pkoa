/**
 * @description 初始化环境变量， 从 .evn.xxx 中读取配置
 */
import dotenv from 'dotenv'

export function initEnv() {
  dotenv.config({ path: '.env.' + process.env.NODE_ENV })
  console.log(`init dotenv`)
}
