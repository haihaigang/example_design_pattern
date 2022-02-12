class MessageQueue {
    queue = new Map()

    attach(observer) {
        this.queue.set(observer, observer)
    }

    detach(observer) {
        this.queue.delete(observer)
    }

    notify(data) {
        console.log('mq notify', data)
        this.queue.forEach((key, value) => {
            value(data)
        })
    }
}

export default MessageQueue