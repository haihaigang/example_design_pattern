import BrickFactory from "./BrickFactory.js";
import ImgBrick from "./domains/ImgBrick.js";

class ImgBrickFactory extends BrickFactory {
    createBrick(options) {
        return new ImgBrick(options)
    }
}

export default ImgBrickFactory