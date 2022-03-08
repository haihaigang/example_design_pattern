import Sorter from "./Sorter.js";

class SelectionSorter extends Sorter {
    sort(data) {
        for (let i = 0; i < data.length; i++) {
            let k = i
            for (let j = i + 1; j < data.length; j++) {
                if (data[k] > data[j]) {
                    k = j
                }
            }

            let temp = data[i]
            data[i] = data[k]
            data[k] = temp
            
        }
    }
}

export default SelectionSorter