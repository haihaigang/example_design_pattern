import Aggreate from "./Aggregate.js";
import BankCardBagIterator from "./BankCardBagIterator.js"

class BankCardBag extends Aggreate {
    bankCards = []

    appendBankCard(bankCard) {
        this.bankCards.push(bankCard)
    }

    getBankCardAt(i) {
        return this.bankCards[i]
    }

    getLength() {
        return this.bankCards.length
    }

    iterator() {
        return new BankCardBagIterator(this)
    }
}

export default BankCardBag