import BankCardBag from "./BankCardBag.js";
import BankCardBag2 from "./BankCardBag2.js";
import BankCard from "./BankCard.js";

function Main() {
    let bcb = new BankCardBag2()

    bcb.appendBankCard(new BankCard('ICBC'))
    bcb.appendBankCard(new BankCard('CBC'))
    bcb.appendBankCard(new BankCard('SCBC'))
    bcb.appendBankCard(new BankCard('CGB'))
    bcb.appendBankCard(new BankCard('CCB'))

    let it = bcb.iterator()

    while(it.hasNext()) {
        let card = it.next()
        console.log(card.bank)
    }
}

Main()