import MessageQueue from "./MessageQueue.js";

class Brick1 {
    mq = null
    constructor(mq) {
        this.mq = mq
        this.mq.attach(this.run)
    }

    delete() {
        this.mq.detach(this.run)
    }

    run(data) {
        console.log('brick1 run', data)
    }
}

export default Brick1