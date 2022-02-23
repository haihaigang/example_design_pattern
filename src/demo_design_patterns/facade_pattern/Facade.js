import OneBrick from "./OneBrick.js"
import TwoBrick from "./TwoBrick.js"

class Facade {
    constructor(name) {
        if (name === 'a') {
            this.sub = new OneBrick()
        } else {
            this.sub = new TwoBrick()
        }
    }

    log() {
        this.sub.log()
    }
}

export default Facade