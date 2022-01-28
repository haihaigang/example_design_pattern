import SimpleFactory from "./SimpleFactory.js";
import TYPE from './Config.js'

let p1 = SimpleFactory.createProduct({type: TYPE.SPECIAL, name: 'xixi'})

console.log(p1.print())