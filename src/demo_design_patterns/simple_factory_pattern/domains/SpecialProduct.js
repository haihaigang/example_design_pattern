import Product from './Product.js'

class SpecialProduct extends Product {
    constructor(props) {
        super(props)

        this.category = 'SPECIAL'
    }
}

export default SpecialProduct