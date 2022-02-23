import AdConfigContext from "./AdConfigContext.js";
import ShmAdConfig from "./ShmADConfig.js"

let adConfigContext = new AdConfigContext()

adConfigContext.setAdConfig(new ShmAdConfig())
console.log(adConfigContext.getPkgNameCN())