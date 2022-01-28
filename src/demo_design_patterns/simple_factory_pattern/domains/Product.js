class Product {
    constructor(props) {
        this.name = props.name
        if (props.category) {
            this.category = props.category
        }
    }

    /**
     * 产品名称
     */
    name = undefined

    /**
     * 产品类目
     */
    category = undefined

    print() {
        return `there is a product named ${this.name} in category ${this.category}`
    }
}

export default Product