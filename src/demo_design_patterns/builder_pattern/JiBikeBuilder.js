import BikeBuilder from "./BikeBuilder.js"
import Bike from "./Bike.js"

class JiBikeBuilder extends BikeBuilder {
    constructor() {
        super('ji')
    }
    buildBell() {
        this.bike.bell = 'big bell'
    }
    buildWheel() {
        this.bike.wheel = 'third wheel'

    }
    buildFrame() {
        this.bike.frame = 'gray frame'
    }
    buildHandlebar() {
        this.bike.handlebar = 'automan handlebar'
    }

    getResult() {
        return this.bike
    }
}

export default JiBikeBuilder