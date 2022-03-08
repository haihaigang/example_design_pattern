import Sorter from "./Sorter.js";

class BubbleSorter extends Sorter {
    sort(data) {
        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data.length; j++) {
                if (data[i] < data[j]) {
                    let temp = data[j]
                    data[j] = data[i]
                    data[i] = temp
                }
            }
        }
    }
}

export default BubbleSorter