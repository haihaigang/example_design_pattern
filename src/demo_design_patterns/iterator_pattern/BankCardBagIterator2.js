import Iterator from "./Iterator.js";

class BankCardBagIterator extends Iterator {
    bankCardBag = null
    values = null
    last = null

    constructor(obj) {
        super()

        this.bankCardBag = obj
        this.values = obj.getMap().values()
        this.idx = 0
    }

    hasNext() {
        this.last = this.values.next()
        // console.log(this.last, this.values)
        return !this.last.done
    }

    next() {
        return this.last.value
    }
}

export default BankCardBagIterator