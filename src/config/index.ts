import { devConf } from "./dev";
import { prodConf } from "./prod";

console.log(process.env.NODE_ENV);

const config = process.env.NODE_ENV === "development" ? devConf : prodConf;

export default config;
