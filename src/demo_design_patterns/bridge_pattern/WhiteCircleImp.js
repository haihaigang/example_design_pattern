import Circle from "./domains/Circle.js"
import White from "./domains/White.js"
import Imp from "./Imp.js"

class WhiteCircleImp extends Imp {
    color = new White();
    shape = new Circle();
}

export default WhiteCircleImp