import { loadavg } from "os";
import { IConfig } from "./base";
import { devConf } from "./dev";
import { prodConf } from "./prod";
import { testConf } from "./test";

let config: IConfig;

if (process.env.NODE_ENV === "test") {
  config = testConf;
} else if (process.env.NODE_ENV === "prod") {
  config = prodConf;
} else {
  config = devConf;
}

console.log(config);
console.log(process.env.NODE_ENV);

export default config;
