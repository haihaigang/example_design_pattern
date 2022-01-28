class Bike {
    wheel = null
    frame = null
    bell = null
    handlebar = null

    constructor(name) {
        this.name = name
    }

    print() {
        return `This is ${this.name} Bike，with ${this.wheel}、${this.frame}、${this.bell}、${this.handlebar}。`
    }
}

export default Bike