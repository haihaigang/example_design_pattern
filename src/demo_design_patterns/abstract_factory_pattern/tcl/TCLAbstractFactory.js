import AbstractFactory from '../base/AbstractFactory.js'
import TCLFridge from './domains/TCLFridge.js'
import TCLTv from './domains/TCLTv.js'

class TCLAbstractFactory extends AbstractFactory {

    createFridge(options) {
        return new TCLFridge(options)
    }

    createTv(options) {
        return new TCLTv(options)
    }
}

export default TCLAbstractFactory