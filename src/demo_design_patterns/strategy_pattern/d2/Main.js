import BubbleSorter from "./BubbleSorter.js";
import SelectionSorter from "./SelectionSorter.js";
import SortAndPrint from "./SortAndPrint.js";

let data = [8,2,3,4,99,12, 53,7,8]
// let sorter = new BubbleSorter()
let sorter = new SelectionSorter()
let sap = new SortAndPrint(data, sorter)
sap.sort()