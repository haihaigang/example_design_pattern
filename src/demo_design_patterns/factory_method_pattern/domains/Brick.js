class Brick {

    /**
     * 组件名称
     */
    name = undefined

    /**
     * 数据源
     */
    data= []

    constructor(options) {
        if (options) {
            this.name = options.name
        }
    }

    setData(data) {
        this.data = data
    }

    print() {
        return `Brick named ${this.name} has data count ${this.data.length}`
    }
}

export default Brick