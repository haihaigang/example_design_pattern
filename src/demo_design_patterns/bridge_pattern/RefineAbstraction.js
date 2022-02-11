class RefineAbstraction {
    constructor(concreteImp) {
        this.imp = concreteImp
    }

    draw() {
        return this.imp.draw()
    }
}

export default RefineAbstraction