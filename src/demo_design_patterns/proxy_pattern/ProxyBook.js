import Book from "./Book.js"
import RealBook from "./RealBook.js";

class ProxyBook extends Book {
    constructor() {
        super()
        this.book = new RealBook()
    }

    preWrite() {
        console.log('Proxy pre write')
    }

    write() {
        this.preWrite()
        this.book.write()
        this.afterWrite()
    }

    afterWrite() {
        console.log('Proxy after write')
    }
}

export default ProxyBook