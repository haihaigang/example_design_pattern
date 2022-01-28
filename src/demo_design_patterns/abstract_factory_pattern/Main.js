import HaierAbstractFactory from "./haier/HaierAbstractFactory.js";
import TCLAbstractFactory from "./tcl/TCLAbstractFactory.js";

// 抽象工厂模式的使用
// 属于同一个产品族的产品将在一起使用，这一约束必须在系统的设计中体现出来。


// 产品族1 - Haier
let haf = new HaierAbstractFactory()
let f1 = haf.createFridge()
let t1 = haf.createTv()

console.log(f1.print())
console.log(t1.print())

// 产品族2 - TCL
let taf = new TCLAbstractFactory()
let f2 = taf.createFridge()
let t2 = taf.createTv()

console.log(f2.print())
console.log(t2.print())