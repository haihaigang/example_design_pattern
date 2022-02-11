import Book from "./Book.js"

class RealBook extends Book {
    name = 'book'

    write() {
        console.log('Book write')
    }
}

export default RealBook