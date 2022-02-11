import Adaptee from "./Adaptee.js";
import Adaptee2 from "./Adaptee2.js";
import Adapter from "./Adapter.js";

import AdapterClass from "./AdapterClass.js"

// 对象适配器的用法
// 通过传入不同对象到适配器类中实现
// 一个适配器可以支持多个相似的对象

let a = new Adapter(new Adaptee())
a.fly()


let a2 = new Adapter(new Adaptee2())
a2.fly()

// 类适配器的用户
// 通过新家一个适配器类继承适配者类实现
// 

let cc = new AdapterClass()
cc.fly()