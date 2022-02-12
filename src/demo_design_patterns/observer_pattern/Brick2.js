import MessageQueue from "./MessageQueue.js";

class Brick2 {
    constructor(mq) {
        this.mq = mq
        this.mq.attach(this.run)
    }

    delete() {
        this.mq.detach(this.run)
    }

    run(data) {
        console.log('brick2 run', data)
    }
}

export default Brick2