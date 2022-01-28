import BikeBuilder from "./BikeBuilder.js"
import Bike from "./Bike.js"

class FengBikeBuilder extends BikeBuilder {
    constructor() {
        super('feng')
    }
    buildBell() {
        this.bike.bell = 'silver bell'
    }
    buildWheel() {
        this.bike.wheel = 'black wheel'

    }
    buildFrame() {
        this.bike.frame = 'white frame'
    }
    buildHandlebar() {
        this.bike.handlebar = 'blue handlebar'
    }

    getResult() {
        return this.bike
    }
}

export default FengBikeBuilder