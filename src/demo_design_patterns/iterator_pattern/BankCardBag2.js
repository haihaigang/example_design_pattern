import Aggreate from "./Aggregate.js";
import BankCardBagIterator2 from "./BankCardBagIterator2.js"

class BankCardBag extends Aggreate {
    bankCards = new Map()

    appendBankCard(bankCard) {
        // this.bankCards.push(bankCard)
        this.bankCards.set(bankCard, bankCard)
    }

    getBankCardAt(i) {
        return this.bankCards[i]
    }

    getLength() {
        return this.bankCards.size
    }

    getMap() {
        return this.bankCards
    }

    iterator() {
        return new BankCardBagIterator2(this)
    }
}

export default BankCardBag