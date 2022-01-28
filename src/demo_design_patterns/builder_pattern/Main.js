import Director from "./Director.js"
import FengBikeBuilder from "./FengBikeBuilder.js"
import JiBikeBuilder from "./JiBikeBuilder.js"

let d = new Director()

d.setBuilder(new FengBikeBuilder())
let bike = d.constuct()

console.log(bike.print())


d.setBuilder(new JiBikeBuilder())
let bike2 = d.constuct()

console.log(bike2.print())