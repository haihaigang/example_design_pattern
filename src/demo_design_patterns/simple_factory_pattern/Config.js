import SeckillProduct from './domains/SeckillProduct.js'
import SpecialProduct from './domains/SpecialProduct.js'

const TYPE = {
    'SPECIAL': 'SPECIAL', 'SECKILL': 'SECKILL'
}

const PRODUCT_TYPE_MAP = {
    [TYPE['SPECIAL']]: SpecialProduct,
    [TYPE['SECKILL']]: SeckillProduct
}

export default TYPE
export { PRODUCT_TYPE_MAP }