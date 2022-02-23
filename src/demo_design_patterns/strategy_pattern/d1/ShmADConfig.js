import BaseAdConfig from "./BaseAdConfig.js"

class ShmAdConfig extends BaseAdConfig {
    adids = ADID_MAP
    pkgNameCn = '实惠哞'
    pkgName = 'com.kuaileapp.mall'
}

export default ShmAdConfig

/**
 * 萌推-实惠哞广告ID对应表
 * - 具体参见文档：http://km.innotechx.com/x/vj4bDQ
 */
const ADID_MAP = {
    // 签到
    "9001348": "9009784",
    "9000260": "9009783",
    "9000303": "9009782",
    "9000304": "9009781",
    "9003264": "9009780",
    "9005335": "9009779",
    "9003494": "9009778",
    "9004245": "9009777",
    // 果园
    "9001678": "9009776",
    "9001677": "9009775",
    "9001681": "9009774",
    "9003379": "9009788",
    // 走路
    "9001680": "9009773",
    "9001679": "9009772",
    "9002040": "9009771",
    "9002041": "9009770",
    "9003263": "9009769",
    "9003380": "9009768",
    // 好物免费领
    "9004634": "9009767",
    "9008277": "9009766",
    // 盲盒
    "9009526": "9009765",
    "9009527": "9009764",
    // 补贴金
    "9007409": "9009763",
    // 0.3元提现
    "9007410": "9009762",
  }