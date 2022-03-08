class SortAndPrint {
    constructor(data, sorter) {
        this.data = data
        this.sorter = sorter
    }

    sort() {
        this.print()
        this.sorter.sort(this.data)
        this.print()
    }

    print() {
        console.log(this.data.join(','))
    }
}

export default SortAndPrint