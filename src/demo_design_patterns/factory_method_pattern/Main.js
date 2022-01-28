import GoodsBrickFactory from './GoodsBrickFactory.js'
import ImgBrickFactory from './ImgBrickFactory.js'

let gbf = new GoodsBrickFactory()
let brick = gbf.createBrick()
brick.setData([1,2,3])

console.log(brick.print())

let ibf = new ImgBrickFactory()
let b2 = ibf.createBrick()

console.log(b2.print())