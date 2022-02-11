class Adapter {
    constructor(adaptee) {
        this.adaptee = adaptee
    }

    fly() {
        this.adaptee.flyWithWing()
    }
}

export default Adapter