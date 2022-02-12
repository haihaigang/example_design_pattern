import MessageQueue from "./MessageQueue.js";
import Brick1 from "./Brick1.js";
import Brick2 from "./Brick2.js"

let mq = new MessageQueue()
let brick1 = new Brick1(mq)
let brick2 = new Brick2(mq)

mq.notify('from main')

brick1.delete()
brick2.delete()

mq.notify('from main 222')