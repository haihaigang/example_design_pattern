import BrickFactory from './BrickFactory.js'
import GoodsBrick from './domains/GoodsBrick.js'

class GoodsBrickFactory extends BrickFactory {
    createBrick(options) {
        return new GoodsBrick(options)
    }
}

export default GoodsBrickFactory