
class Log {
    static instance = null

    static getInstance() {
        if (Log.instance === null) {
            return Log.instance = new Log()
        } else {
            return Log.instance
        }
    }

    static create() {

    }

    info(msg) {
        console.log(`[info] ${msg}`)
    }

    error(msg) {
        console.log(`[error] ${msg}`)
    }
}

export default Log.getInstance()