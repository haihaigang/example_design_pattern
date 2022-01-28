class AbstractProduct {
    name = undefined
    type = undefined
    brand = undefined

    constructor(options) {
        if (options) {
            this.name = options.name
        }
    }

    print() {
        return `This is ${this.type} named ${this.name}。`
    }
}

export default AbstractProduct