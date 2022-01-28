class BikeCompany {
    constuct() {
        this.builder.buildBell()
        this.builder.buildWheel()
        this.builder.buildFrame()
        this.builder.buildHandlebar()
        return this.builder.getResult()
    }

    setBuilder(builder) {
        this.builder = builder
    }
}

export default BikeCompany