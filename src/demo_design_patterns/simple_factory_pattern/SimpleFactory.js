import { PRODUCT_TYPE_MAP } from './Config.js'

class SimpleFactory {
    /**
     * 简单工厂模式创建方法，用来创建各种产品
     * @param {object} options { type: 'xxx 具体的产品类型参数', ...}
     * @returns 某个产品实例
     */
    static createProduct(options) {
        const Product = PRODUCT_TYPE_MAP[options.type]
        if (!Product) {
            throw new Error(`${options.type} 类型产品不存在，确认你输入的是正确的类型`)
        }

        return new Product(options)
    }
}

export default SimpleFactory