const ERROR_NOT_ALLOWD = ''

class AbstractFactory {
    createFridge() {
        throw new Error('Not allowed call \`createFridge\` method in abstract')
    }

    createTv() {
        throw new Error('Not allowed call \`createTv\` method in abstract')
    }
    
    // 如果增加一个产品等级结构（或者说是产品类型），在每个具体的抽象工厂子类都要实现该方法
    // 不符合“开闭原则”
    createWashingMachine() {
        throw new Error('Not allowed call \`createWashingMachine\` method in abstract')
    }
}

export default AbstractFactory