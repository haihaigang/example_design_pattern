import Bike from "./Bike.js"

class BikeBuilder {
    bike = null

    constructor(name) {
        this.bike = new Bike(name)
    }

    buildBell() {
    }
    buildWheel() {
    }
    buildFrame() {
    }
    buildHandlebar() {
    }

    getResult() {
        return this.bike
    }
}

export default BikeBuilder