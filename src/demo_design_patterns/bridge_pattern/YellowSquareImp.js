import Yellow from "./domains/Yellow.js"
import Square from "./domains/Square.js"
import Imp from "./Imp.js"

class YellowSquareImp extends Imp {
    shape = new Square()
    color = new Yellow()
}

export default YellowSquareImp