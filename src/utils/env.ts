/**
 * @description 环境变量
 */

const ENV = process.env.NODE_ENV!

const isDev = ENV === 'development'
// export { isDev }

const envs = {
  isDev: ENV === 'development',
  isNotDev: ENV !== 'development',
  isProd: ENV === 'production',
  isNotProd: ENV !== 'production',
  isTest: ENV === 'test',
  isNotTest: ENV !== 'test',
}

export = envs
