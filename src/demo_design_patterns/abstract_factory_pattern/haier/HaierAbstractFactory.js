import AbstractFactory from '../base/AbstractFactory.js'
import HaierFridge from './domains/HaierFridge.js'
import HaierTv from './domains/HaierTv.js'

class HaierAbstractFactory extends AbstractFactory {

    createFridge(options) {
        return new HaierFridge(options)
    }

    createTv(options) {
        return new HaierTv(options)
    }
}

export default HaierAbstractFactory