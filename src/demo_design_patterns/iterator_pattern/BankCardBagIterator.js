import Iterator from "./Iterator.js";

class BankCardBagIterator extends Iterator {
    bankCardBag = null
    idx = null

    constructor(obj) {
        super()

        this.bankCardBag = obj
        this.idx = 0
    }

    hasNext() {
        return this.idx < this.bankCardBag.getLength() - 1
    }

    next() {
        let bankCard = this.bankCardBag.getBankCardAt(this.idx)
        this.idx++

        return bankCard
    }
}

export default BankCardBagIterator