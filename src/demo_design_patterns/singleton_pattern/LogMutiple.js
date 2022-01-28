
class Log {
    /**
     * 日志实例的集合，支持多个
     */
    static instances = new Map()

    type = null

    constructor(type) {
        this.type = type
    }

    static getInstance(type) {
        let ins = Log.instances.get(type)
        if (ins) return ins

        let log = new Log(type)
        Log.instances.set(type, log)
        return log
    }

    info(msg) {
        console.log(`[${this.type}][info] ${msg}`)
    }

    error(msg) {
        console.log(`[${this.type}][error] ${msg}`)
    }
}

export default Log