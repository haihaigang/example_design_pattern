
class AdConfigContext {
    adConfig = undefined

    getPkgNameCN() {
        return this.adConfig.getPkgNameCN()
    }

    getAdids() {
        return this.adConfig.getAdids()
    }

    setAdConfig(adConfig) {
        this.adConfig = adConfig
    }
}

export default AdConfigContext