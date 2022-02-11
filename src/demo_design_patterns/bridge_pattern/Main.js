import RefineAbstraction from "./RefineAbstraction.js"
import WhiteCircleImp from "./WhiteCircleImp.js"
import YellowSquareImp from "./YellowSquareImp.js"

let wci = new WhiteCircleImp()
let ra = new RefineAbstraction(wci)
console.log(ra.draw())

let ysi = new YellowSquareImp()
let ra1 = new RefineAbstraction(ysi)
console.log(ra1.draw())