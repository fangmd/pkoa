import { isProd, isTest } from '../utils/env'
import { IConfig } from './base'
import { devConf } from './dev'
import { prodConf } from './prod'
import { testConf } from './test'

let config: IConfig

if (isTest) {
  config = testConf
} else if (isProd) {
  config = prodConf
} else {
  config = devConf
}

console.log(config)

export default config
